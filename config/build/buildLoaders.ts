import path from "path";
import webpack from "webpack";
import loaderUtils from "loader-utils";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {loader} from 'loader-utils/node_modules/@types/webpack';
import {BuildOptions} from "./types/config";

const getLocalIdent = (
    context: loader.LoaderContext,
    localIdentName: string,
    localName: string,
) => {
    const fileNameOrFolder = context.resourcePath.match(
        /index\.module\.(css|scss|sass)$/
    )
        ? '[folder]'
        : '[name]';
    const hash = loaderUtils.getHashDigest(
        (path.posix.relative(context.rootContext, context.resourcePath) + localName) as unknown as Buffer,
        'md5',
        'base64',
        5
    );
    const className = loaderUtils.interpolateName(
        context,
        fileNameOrFolder + '_' + localName + '__' + hash,
    );
    return className.replace('.module_', '_').replace(/\./g, '_');
};

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const babelLoader = {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            }
        }
    }

    const styleLoader = options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

    // simple css, not module
    const cssLoader = {
        test: /\.css$/i,
        exclude: /\.module\.css/i,
        use: [
            {loader: styleLoader},
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2,
                    modules: false,
                },
            },
            {
                loader: 'postcss-loader',
            },
        ],
    };

    // exactly module css loader
    const moduleCssLoader = {
        test: /\.module\.css$/i,
        use: [
            {loader: styleLoader},
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2,
                    modules: {
                        getLocalIdent,
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    },
                },
            },
            {
                loader: 'postcss-loader', options: {
                    // Если используется postcss, сюда закинуть импорт миксинов или использовать postcss.config
                    additionalData: ''
                }
            },
        ],
    };

    // sass loader with modules
    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            {loader: styleLoader},
            {
                loader: "css-loader",
                options: {
                    modules: {
                        getLocalIdent,
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    },
                }
            },
            {
                loader: "sass-loader",
                options: {
                    // Если используется sass, тут живут глобальные импорты для миксинов
                    additionalData: '@import "app/styles/general/_mixins.scss";',
                }
            }
        ]
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const fileLoader = {
        test: /\.(png|webp|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
        moduleCssLoader,
        sassLoader,
    ]
}