import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { buildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { stringify } from "querystring";
export function buildPlugins({
  paths,
  isDev,
}: buildOptions): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
}
