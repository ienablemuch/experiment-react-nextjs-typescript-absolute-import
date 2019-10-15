const path = require("path");

const resolveTsconfigPathsToAlias = require("./resolve-tsconfig-path-to-webpack-alias");

module.exports = {
    webpack(config, { dev }) {
        config.resolve.alias = {
            ...config.resolve.alias,
            ...resolveTsconfigPathsToAlias()
        };

        return config;
    }
};
