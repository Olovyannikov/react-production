import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';
import { buildAliases } from './buildAliases';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: buildAliases({
            '@': 'src'
        })
    }
}