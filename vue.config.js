// Declare root dirname globally
const path = require("path");

// eslint-disable-next-line no-underscore-dangle
global.__rootDirname = path.join(__dirname, "dist");

const fs = require("fs");
const merge = require("webpack-merge");
const defaultConfiguration = require("./vue-config/config.default");
const fontConfig = require("./vue-config/config.fonts");
const environmentConfigurationPath = `./vue-config/config.${process.env.NODE_ENV}.js`;

const environmentConfiguration = fs.existsSync(environmentConfigurationPath)
  ? require(environmentConfigurationPath) // eslint-disable-line
  : {};

const config = merge(defaultConfiguration, environmentConfiguration, fontConfig);

module.exports = config;
