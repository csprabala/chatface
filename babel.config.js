module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
    plugins: [
        ['@babel/plugin-transform-runtime', {
            "useESModules": true
        }],
        '@babel/plugin-proposal-class-properties'
    ]
}