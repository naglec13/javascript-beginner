// import {msg,sum} from './module'
//
// console.log('import function sum: ',sum(10, 5));
// console.log('import string: ',msg)

import * as AnotherFile from './module'

console.log(AnotherFile.msg);
AnotherFile.logMessage()
AnotherFile.default.log()