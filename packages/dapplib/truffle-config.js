require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food cheap repeat saddle artist hundred light army general'; 
let testAccounts = [
"0xc765419504b0ca966e366d093165180539f772c23a3ca54cc103ad8879d70922",
"0xc142ef0d8ab5a8c36a90039f87b66a41ab39ca0bbfe9606e8f68128ecf1e3b12",
"0xba4e1427cee3f35c6eec6ae2d759a66dcc3681d996cbbadecaface14d31cf846",
"0xc98e0865e409bc8dead99391128e3459886e22d4312832f79811e03a1091aebe",
"0xca593ddf0a6d6585a59814aa39797f24f19499410e0ae7f2e5059935a71d5137",
"0xa9ff1ad7c1ee474fe89b68cb479f2efcd9ae5a4be9517e64cc2fc80d4ab44782",
"0xaecdf7f9ad37250b70173304ad833c66c0cec15e67921f458b3799fef5c3ff67",
"0xdc706dcead7d62666d588b2102818ec5d94f6e31f480d2ef8b07638aadd54554",
"0x5a05fff863c0d112ec26e6641b9838d17aa620db6fa1a7402978a05d4fe5708b",
"0x8e30bc966ba33b8bc68aaac461b006b26ece4ae3eb75c7f60cfb74ab95bac4c0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


