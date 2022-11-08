/*
|--------------------------------------------------------------------------
|
| 对应 package.json/name
|
|--------------------------------------------------------------------------
*/

const helDevUtils = require('hel-dev-utils');
const pkg = require('../../package.json');

const subApp = helDevUtils.createVue2SubApp(pkg, { npmCdnType: 'unpkg' });

export const LIB_NAME = 'pixocial-hel';

module.exports = subApp;

