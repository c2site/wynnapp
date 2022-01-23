import ABI from '../../imports/ui/components/wallet/abi.json';
import { settings , settingsSet} from "../settings";
const CONTRACT_ADDRESS = settings('bep20.contract');
const URL = settings('url');
const API = settings('api');
const Web3 = require('web3');

class Token {
    constructor() {
        this.abi = ABI;
        this.http = new Web3(new Web3.providers.HttpProvider(`https://${URL}?api_key=${API}`));
        this.wss = new Web3(new Web3.providers.WebsocketProvider(`wss://${URL}?api_key=${API}`));
        this.contract = new this.http.eth.Contract(ABI, CONTRACT_ADDRESS);
        this.utils = this.http.utils;
    }

    async getEvents() {
        const number = settings('block', 13220523);
        let block = await this.http.eth.getBlockNumber();

        if(!number) settingsSet('block', block);
        //if (!block) return;

        console.log(number, block);
        if(block - number > 5000) {
            block = number + 5000
        }

        const txs = await this.contract.getPastEvents('Transfer', {fromBlock: number, toBlock: block});
        this._checkTxs(txs);
        settingsSet('block', block);
    }
}