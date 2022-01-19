import ABI from './abi.json';
const address = '0x5167a8DbDf570922709Ba65028E8115E7DDBD7b4';

export function getToken(web3) {
    return web3
        ? new web3.eth.Contract(ABI, address, {
            from: web3.eth.defaultAccount
        })
        : null;
}