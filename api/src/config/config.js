let _ = require('lodash');
let development = require('./development');
let test = require('./test');
let production = require('./production');

let env = process.env.NODE_ENV || 'development';
let configs = {
    development: development,
    test: test,
    production: production
};
let defaultConfig = {
    env: env
};

let config = _.merge(defaultConfig, configs[env]);

module.exports = config;
