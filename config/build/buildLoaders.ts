import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const styleLoader = options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

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
    const moduleCssLoader = {
        test: /\.module\.css$/i,
        use: [
            {loader: styleLoader},
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2,
                    modules: {
                        localIdentName: options.isDev
                            ? '[folder]__[local]--[hash:base64:5]'
                            : '[hash:base64:5]',
                    },
                },
            },
            {loader: 'postcss-loader'},
        ],
    };

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            {loader: styleLoader},
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev ? '[folder]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                    },
                }
            },
            "sass-loader"
        ]
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    return [
        typescriptLoader,
        cssLoader,
        moduleCssLoader,
        sassLoader,
    ]
}