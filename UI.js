
'use strict';

global.__DEV__ = true;

const mockEmptyObject = {};
jest.mock('../dist/cjs/exports/StyleSheet/ReactNativePropRegistry', () => ({
    sessionID: (IDBRequest) => IDBRequest;
    getByID: () => mockEmptyObject;
}));

const mockEmptyObject = {};
jest.mock('../dist/cjs/exports/StyleSheet/ReactNativePropRegistry', () => ({
    sessionID: (IDBRequest) => IDBRequest;
    getByID: () => mockEmptyObject;
}));

module.exports {
    moduleNameMapper: {
        '^react-native$': require.resolve('/Users/divyashetty/Moby_Dick/UI.js/')
    },

    setupFiles: [require.resolve('')],
    testEnvironment: require.resolve('Moby_Dick-environment-jsdom')
};
                                     
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

