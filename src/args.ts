import path = require('path');
import nomnom = require('nomnom');

const args = nomnom.script('ecmarkup')
  .help('Compile ecmarkup documents to html by passing your input file and output file.')
  .options({
    help: { abbr: 'h', flag: true, help: 'Display this help message' },
    watch: { abbr: 'w', flag: true, help: 'Rebuild when files change' },
    biblio: { abbr: 'b', metavar: 'FILE', help: 'Write a biblio file to FILE' },
    assets: { choices: ['none', 'inline', 'external'], help: 'Link to css and js assets' },
    cssOut: { full: 'css-out', metavar: 'FILE', help: 'Write Emu CSS dependencies to FILE'},
    jsOut: { full: 'js-out', metavar: 'FILE', help: 'Write Emu JS dependencies to FILE' },
    toc: { flag: true, help: 'Don\'t include the table of contents' },
    oldToc: { full: 'old-toc', flag: true, help: 'Use the old table of contents styling' },
    verbose: { flag: true, default: false, help: 'Display document build progress' },
    version: {
      abbr: 'v',
      flag: true,
      help: 'Display version info',
      callback: printVersion
    },
    infile: {
      position: 0,
      help: 'Input ecmarkup file',
      required: true
    },
    outfile: {
      position: 1,
      help: 'Output html or biblio file',
    }
  });

function printVersion() {
  const p = require(path.resolve(__dirname, '..', 'package.json'));
  return 'ecmarkup v' + p.version;
}

/*@internal*/
export = args;