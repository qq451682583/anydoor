const path = require('path');

const mimeTypes = {
    'css': 'text/css',
    'gif': 'image/gif',
    'html': 'text/html',
    'ico': 'image/x-icon',
    'png': 'image/png',
    'js': 'text/javascript',
    'json': 'aplication/json',
    'txt': 'text/plain'
}

module.exports = (filePath) => {
    let ext = path.extname(filePath)
        .split('.')
        .pop()
        .toLowerCase();
    if( !ext ){
        ext = filePath;
    }

    return mimeTypes[ext] || mimeTypes['txt']
};
