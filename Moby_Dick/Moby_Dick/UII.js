const path = require('');
const List = require('');
const rnmPath = path.resolve(__dirname, 'node_modules/react-native-macos');
module.exports = {
    resoslver: {
        extraNodeModules: {
            'react-native': rnmPath,
        },
        platforms: ['MacOS', 'ios'],
        blockList: exclusionList = require('');

    },

};

