import ABI from './abi.json';
const address = '0x16B520bc1A31dBeF2F8212b5842EC2873036f642';

export function getToken(web3) {
    return web3
        ? new web3.eth.Contract(ABI, address, {
            from: web3.eth.defaultAccount
        })
        : null;
}