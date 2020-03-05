// Please refer to the docs below for details
// https://cardanodocs.com/technical/hd-wallets/


var lib = require("cardano-crypto.js")
let mnemonic = "logic easily waste eager injury oval sentence wine bomb embrace gossip supreme"

lib.mnemonicToRootKeypair(mnemonic, 1).then( (root_xpriv) => {
    console.log("root_xpriv key is:- ", root_xpriv.toString("hex"));

    var root_xpub = root_xpriv.slice(64, 128);
    console.log("\nroot_xpub key is:- ", root_xpub.toString("hex"));

    // 0x80000001 = 2147483649
    let walletPrivKey = lib.derivePrivate(root_xpriv, 0x80000001, 1);
    console.log("\nwalletPrivKey is:- ", walletPrivKey.toString("hex"));

    let derivationPath =  [2147483648, 2147483650];
    const sampleHdPassphrase = Buffer.from('c582f8e7cf7aeb6e5f3e96e939a92ae1642360a51d45150f34e70132a152203f', 'hex')
    let firstAddress = lib.packAddress(derivationPath,root_xpub,sampleHdPassphrase, 1);
    console.log("\naddress is:- ", firstAddress);
});





