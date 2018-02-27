'use strict';
import "core-js";


const fs = require('fs');

let fileContent = 'I can write';
fs.writeFileSync('message.txt', fileContent);