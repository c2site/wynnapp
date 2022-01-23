import ABI from './abi.json';
const address = '0xE3cd10A05F05D89A16e4831D9edda11cC9799f6E';

export function getToken(web3) {
    return web3
        ? new web3.eth.Contract(ABI, address, {
            from: web3.eth.defaultAccount
        })
        : null;
}