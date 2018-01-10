/**
 * @author: @AngularClass
 */
'use strict';

// Look in ./config for karma.conf.js
const config = require('./.ngx-config');

config.src = '/';

module.exports = require('./.config/karma.conf')(config);
