const fs = require('fs');

let convertetThisText = fs.readFileSync('./Aron.tmTheme', 'utf-8');

let hello = convertetThisText
  .replace(/<\/dict>\n<dict>/g, '},\n{')
  .replace(/<dict>/g, '{')
  .replace(/<\/dict>/g, '}')
  .replace(/<key>/g, '"')
  .replace(/<\/key>/g, '": ')
  .replace(/\n<string>/g, '"')
  .replace(/<\/string>/g, '",')
  .replace(/scope:/g, 'scope: [')
  .replace(/,\nsettings/g, ' ]\nsettings')
  .replace(/,\n}/g, '\n}')


console.log(hello)

// let splittedFile = convertetThisText.split(`</dict>\n<dict>`);
// splittedFile.map(e => e
//   .split('\n<key>')
//   .map(e => 
//     e.split('\n<key>settings</key>')
//     .map(e => 
//       e.split('</key>\n<string>')
//       .map(e => {
//         if(e.indexOf('</string>') !== -1) {

//         }
//       })
//     )
//   )
// )















//console.log(splittedFile);