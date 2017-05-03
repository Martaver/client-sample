// tslint:disable-next-line:no-import-side-effect
import './index';

import { setStatefulModules } from 'fuse-box/modules/fuse-hmr';

const statefulModules = [
  'store/',
  'router/',
];

const isStateful = (moduleName: string) =>  
  statefulModules.some(stateful =>
    RegExp(stateful).test(moduleName)
);

/**
 * Go to https://github.com/basarat/fuse-hmr for more info.
 * Also https://medium.com/@basarat/rethinking-hot-module-reloading-58ce15b5f496.
 */
setStatefulModules(isStateful);