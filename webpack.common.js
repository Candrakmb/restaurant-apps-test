/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const path = require('path');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPngQuant = require('imagemin-pngquant');

module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader', options: { url: false },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/templates/index.html'),
            filename: 'index.html',
            favicon: path.resolve(__dirname, 'src/public/images/favicon.png'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist/'),
                    globOptions: {
                        ignore: ['**/heros/**'], // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder heros
                    },

                },
            ],
        }),
        new ImageminWebpackPlugin({
            plugins: [
                ImageminMozjpeg({
                    quality: 15,
                    progressive: true,
                }),
                ImageminPngQuant({
                    quality: [0.80, 0.90],
                    progressive: true,
                }),
            ],
        }),
        new WebpackPwaManifest({
            name: 'restoku Restaurants Catalogue',
            short_name: 'restoku',
            description: 'Platform to show best restaurant in the world',
            theme_color: '#F7C531',
            background_color: '#ffffff',
            start_url: '/index.html',
            crossorigin: 'use-credentials',
            inject: true,
            ios: true,
            icons: [
                {
                    src: path.resolve(__dirname, 'src/public/images/restoku-logo.png'),
                    sizes: [96, 128, 192, 256, 384, 512],
                    purpose: 'maskable',
                    ios: true,
                },
                {
                    src: path.resolve(__dirname, 'src/public/images/restoku-logo.png'),
                    sizes: '144x144',
                    purpose: 'any',
                },
            ],
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            swDest: './sw.bundle.js',
        }),
    ],
};
