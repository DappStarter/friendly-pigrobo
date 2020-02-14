require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind artwork guess nature sudden tent'; 
let testAccounts = [
"0xf2a4cf3722ee9fc88e7d61498dfcb391cb821edc9f3162ab83cea888dda3df47",
"0x84ddc60aab047f654cce2abea03bc679a560197f955bab2fee1dc1e54e10d10b",
"0x26043c0e10b813da4168f44aa9b8edbff5f4a37c6f2c2966ef2ef29232edd06e",
"0x55fd99c93ff64880e7ab5ac366c7dd4313a9a215072089e846ca3b49b29b234c",
"0x6a4748777d35433a15e85437cb49aa01f826766e66b9587283e43808a0d33a90",
"0xdf2adf6c4304cf3ca4d0e6d12c3d77d275a9a1133a9546a46e2128320355b299",
"0x309e0f2f735c7df48687f678bc138c9c976c3af4765a4df524c0b77a8e07e56e",
"0x0e67a4d6314bdd3d7452d03abb772e102b644dfb565cccfc6e1c7765239b9776",
"0xaf1b56770a642f61731e9a55f5f87e5778fe8f5e7769c0261d336e32114c00f0",
"0x1202b7658a011a886b5cf2ad40027f8a130019566bb79cf76cb68e96277c2ff5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
