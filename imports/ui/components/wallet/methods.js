import Web3 from 'web3';
import ABI from './abi.json';
import BN from "bn.js";
const address = '0xE3cd10A05F05D89A16e4831D9edda11cC9799f6E';

let selectedAccount;

// let nftContract;
let erc20Contract;

let isInitialized = false;

export const init = async () => {
    let provider = window.ethereum;

    if (typeof provider !== 'undefined') {
        provider
            .request({ method: 'eth_requestAccounts' })
            .then((accounts) => {
                selectedAccount = accounts[0];
                console.log(`Selected account is ${selectedAccount}`);
            })
            .catch((err) => {
                console.log(err);
                return;
            });

        window.ethereum.on('accountsChanged', function (accounts) {
            selectedAccount = accounts[0];
            console.log(`Selected account changed to ${selectedAccount}`);
        });
    }

    const web3 = new Web3(provider);

    const networkId = await web3.eth.net.getId();
    const erc20Abi = ABI

    erc20Contract = new web3.eth.Contract(
        erc20Abi,
        address
    );

    isInitialized = true;
};


export const sendToken = async (address, amount) => {
	if (!isInitialized) {
		await init();
	}

	return erc20Contract.methods.buy(new BN(amount)).send({from: selectedAccount})
};