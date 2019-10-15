const path = require("path");

module.exports = {
    webpack(config, { dev }) {
        config.resolve.alias = {
            ...config.resolve.alias,
            love: path.resolve(__dirname, "shared")
        };

        return config;
    }
};
