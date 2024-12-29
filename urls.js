const fs = require('fs');
const axios = require('axios');

function scriptFile(path) {
    fs.readFile(path, 'utf8', async function(err, data) {
        if (err) {
            console.error(`Invalid File: ${err}`);
            process.exit(1);
        }

        let urls = data.split('\n').filter(u => u !== '');

        for (let url of urls) {
            let resp;

            try {
                resp = await axios.get(url);
            } catch {
                console.error(`Could not download from ${url}`);
                continue;
            }

            let newFile = new URL(url).hostname;

            fs.writeFile(newFile, resp.data, 'utf8', function(err) {
                if (err) {
                    console.error(`Could not create: ${newFile}`);
                }
                console.log(`Done writing: ${newFile}`);
            });
        }
    });
}

scriptFile(process.argv[2]);



// Type in Terminal
// node urls.js urls.txt
// Will get output:
// Done writing: rithmschool.com
// Done writing: postgresql.com
// Could not download from http://foozlemcblargh.com
// Done writing: nodejs.org

// ls in Terminal will show created files

// Type in Terminal
// cat nodejs.org
// Prints code from a long html document