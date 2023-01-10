import {config} from './wdio.conf.js';


const chromeConfig = {
    ...config,
    services: [['selenium-standalone', {chrome: 'latest'}]],
    capabilities: [{
        maxInstances: 2,
        browserName: "chrome",
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['headless', 'disable-gpu','--window-size=1940,1080'],
        }
    }],
};
const _config = chromeConfig;
export { _config as config };