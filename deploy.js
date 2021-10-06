const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(

    // MNEMONIC
    "rookie divide age setup win silly body budget grace make duck pizza"
    ,
    // API
    "https://rinkeby.infura.io/v3/e9748a7925724a8a9ea538f352e9e5c9"

);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ["Hi there!"] })
        .send({ gas: "1000000", from: accounts[0] });
git 
    console.log("Contract deployed to", result.options.address);
};
deploy();