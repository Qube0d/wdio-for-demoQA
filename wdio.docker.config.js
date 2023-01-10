import {config} from './wdio.conf.js';


const dockerConfig = {
    ...config,
    services: ['docker'],
    hostname: 'localhost',
    port: 4444,
    path: '/'
}

const _config = dockerConfig;
export { _config as config };