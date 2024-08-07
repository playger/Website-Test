import { buildOptions } from "./types/config";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";

import { buildDevServer } from "./buildDevServer";
import { buildResolvers } from "./buildResolvers";

export function BuildWebpackConfig(
    options: buildOptions
): webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name][contenthash].js",
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        plugins: buildPlugins(options),
    };
}
