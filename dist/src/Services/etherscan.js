"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etherscan = void 0;
const axios_1 = __importDefault(require("axios"));
class Etherscan {
    constructor(apiKey, apiUrl) {
        this.apiUrl = apiUrl || "https://api.etherscan.io/api";
        this.apiKey = apiKey;
        if (!this.apiKey) {
            throw new Error(`API key is required`);
        }
    }
    async getSingleEtherBalance(address, tag) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "balance",
                address: address,
                tag: tag || "latest",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getSingleEtherBalance Error: ${error.message}`);
        }
    }
    async getMultipleEtherBalance(addresses, tag) {
        try {
            if (addresses.length > 20) {
                throw new Error(`maxium of 20 accounts in a single batch`);
            }
            const url = `${this.apiUrl}`;
            const address = addresses.join();
            const params = {
                module: "account",
                action: "balancemulti",
                address: address,
                tag: tag || "latest",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getMultipleEtherBalance Error: ${error.message}`);
        }
    }
    async getTrxList(address, startblock, endblock, page, offset, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "txlist",
                address,
                startblock,
                endblock,
                page,
                offset,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getTrxList Error: ${error.message}`);
        }
    }
    async getInternalTrxListByAddress(address, startblock, endblock, page, offset, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "txlistinternal",
                address,
                startblock,
                endblock,
                page,
                offset,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getInternalTrxListByAddress Error: ${error.message}`);
        }
    }
    async getInternalTrxListByHash(txhash) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "txlistinternal",
                txhash,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getInternalTrxListByHash Error: ${error.message}`);
        }
    }
    async getInternalTrxListByBlockRange(startblock, endblock, page, offset, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "txlistinternal",
                startblock,
                endblock,
                page,
                offset,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getInternalTrxListByBlockRange Error: ${error.message}`);
        }
    }
    async getERC20TokenTransferEventList(address, contractAddress, page, offset, startblock, endblock, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "tokentx",
                address,
                contractAddress,
                page,
                offset,
                startblock,
                endblock,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getERC20TokenTransferEventList Error: ${error.message}`);
        }
    }
    async getERC721TokenTransferEventList(address, contractAddress, page, offset, startblock, endblock, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "tokennfttx",
                address,
                contractAddress,
                page,
                offset,
                startblock,
                endblock,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getERC721TokenTransferEventList Error: ${error.message}`);
        }
    }
    async getERC1155TokenTransferEventList(address, contractAddress, page, offset, startblock, endblock, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "token1155tx",
                address,
                contractAddress,
                page,
                offset,
                startblock,
                endblock,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getERC1155TokenTransferEventList Error: ${error.message}`);
        }
    }
    async getMinedBlocksByAddress(address, blocktype, page, offset) {
        try {
            if (blocktype !== "blocks" && blocktype !== "uncles") {
                throw new Error(`Wrong block type`);
            }
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "getminedblocks",
                address,
                blocktype,
                page,
                offset,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getMinedBlocksByAddress Error: ${error.message}`);
        }
    }
    async getHistoricalEtherBalance(address, blockno) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "balancehistory",
                address,
                blockno,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getHistoricalEtherBalance Error: ${error.message}`);
        }
    }
    async getContractAbi(address) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "contract",
                action: "getabi",
                address,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getContractAbi Error: ${error.message}`);
        }
    }
    async getContractSourceCode(address) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "contract",
                action: "getsourcecode",
                address,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getContractSourceCode Error: ${error.message}`);
        }
    }
    async checkContractExecutionStatus(txhash) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "transaction",
                action: "getstatus",
                txhash,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`checkContractExecutionStatus Error: ${error.message}`);
        }
    }
    async checkTransactionReceiptStatus(txhash) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "transaction",
                action: "gettxreceiptstatus",
                txhash,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`checkTransactionReceiptStatus Error: ${error.message}`);
        }
    }
    async getBlockandUncleReward(blockno) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "block",
                action: "getblockreward",
                blockno,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getBlockandUncleReward Error: ${error.message}`);
        }
    }
    async getEstimatedBlockCountdownTime(blockno) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "block",
                action: "getblockcountdown",
                blockno,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getEstimatedBlockCountdownTime Error: ${error.message}`);
        }
    }
    async getBlockNumberByTimestamp(timestamp, closest) {
        if (closest !== "before" && closest !== "after") {
            throw new Error(`Wrong parameter`);
        }
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "block",
                action: "getblocknobytime",
                timestamp,
                closest,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getBlockNumberByTimestamp Error: ${error.message}`);
        }
    }
    async getDailyAverageBlockSize(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyavgblocksize",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getDailyAverageBlockSize Error: ${error.message}`);
        }
    }
    async getDailyAverageBlockCountAndRewards(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyblkcount",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getDailyAverageBlockCountAndRewards Error: ${error.message}`);
        }
    }
    async getDailyBlockRewards(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyblockrewards",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getDailyBlockRewards Error: ${error.message}`);
        }
    }
    async getDailyAverageBlockTime(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyavgblocktime",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getDailyAverageBlockTime Error: ${error.message}`);
        }
    }
    async getDailyUncleBlockCountAndRewards(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyuncleblkcount",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getDailyUncleBlockCountAndRewards Error: ${error.message}`);
        }
    }
    async getEventLogsByAddress(address, fromBlock, toBlock, page, offset) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "logs",
                action: "getLogs",
                address,
                fromBlock,
                toBlock,
                page,
                offset,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getEventLogsByAddress Error: ${error.message}`);
        }
    }
    async getEventLogsByTopics(fromBlock, toBlock, topic0, topic0_1_opr, topic1, page, offset) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "logs",
                action: "getLogs",
                fromBlock,
                toBlock,
                topic0,
                topic0_1_opr,
                topic1,
                page,
                offset,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getEventLogsByTopics Error: ${error.message}`);
        }
    }
    async getEventLogsByAddressFilteredByTopics(fromBlock, toBlock, address, topic0, topic0_1_opr, topic1, page, offset) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "logs",
                action: "getLogs",
                fromBlock,
                toBlock,
                address,
                topic0,
                topic0_1_opr,
                topic1,
                page,
                offset,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getEventLogsByAddressFilteredByTopics Error: ${error.message}`);
        }
    }
    async getRecentBlockNumber() {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_blockNumber",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getRecentBlockNumber Error: ${error.message}`);
        }
    }
    async getBlockbyNumber(tag, boolean) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getBlockByNumber",
                tag,
                boolean,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getBlockbyNumber Error: ${error.message}`);
        }
    }
    async getUncleByBlockNumberAndIndex(tag, index) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getUncleByBlockNumberAndIndex",
                tag,
                index,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getUncleByBlockNumberAndIndex Error: ${error.message}`);
        }
    }
    async getBlockTransactionCountByNumber(tag) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getBlockTransactionCountByNumber",
                tag,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getBlockTransactionCountByNumber Error: ${error.message}`);
        }
    }
    async getTransactionByHash(txhash) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getTransactionByHash",
                txhash,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getTransactionByHash Error: ${error.message}`);
        }
    }
    async getTransactionByBlockNumberAndIndex(tag, index) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getTransactionByBlockNumberAndIndex",
                tag,
                index,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getTransactionByBlockNumberAndIndex Error: ${error.message}`);
        }
    }
    async getTransactionCount(tag) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getTransactionCount",
                tag,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getTransactionCount Error: ${error.message}`);
        }
    }
    async sendRawTransaction(hex) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_sendRawTransaction",
                hex,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`sendRawTransaction Error: ${error.message}`);
        }
    }
    async getTransactionReceipt(txhash) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getTransactionReceipt",
                txhash,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getTransactionReceipt Error: ${error.message}`);
        }
    }
    async call(to, data, tag) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_call",
                to,
                data,
                tag,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`call Error: ${error.message}`);
        }
    }
    async getCode(address, tag) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getCode",
                address,
                tag,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getCode Error: ${error.message}`);
        }
    }
    async getStorageAt(address, position, tag) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_getStorageAt",
                address,
                position,
                tag,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getStorageAt Error: ${error.message}`);
        }
    }
    async gasPrice() {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_gasPrice",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`gasPrice Error: ${error.message}`);
        }
    }
    async estimateGas(data, to, value, gasPrice, gas) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "proxy",
                action: "eth_estimateGas",
                data,
                to,
                value,
                gasPrice,
                gas,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`estimateGas Error: ${error.message}`);
        }
    }
    async getERC20TokenTotalSupply(contractaddress) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "tokensupply",
                contractaddress,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getERC20TokenTotalSupply Error: ${error.message}`);
        }
    }
    async getERC20TokenBalance(contractaddress, address, tag) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "tokenbalance",
                contractaddress,
                address,
                tag,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getERC20TokenBalance Error: ${error.message}`);
        }
    }
    async getHistoricalERC20TokenTotalSupplyByContractAddressAndBlockNo(contractaddress, blockno) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "tokensupplyhistory",
                contractaddress,
                blockno,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getHistoricalERC20TokenTotalSupplyByContractAddressAndBlockNo Error: ${error.message}`);
        }
    }
    async getHistoricalERC20TokenBalanceByContractAddressAndBlockNo(contractaddress, address, blockno) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "tokensupplyhistory",
                contractaddress,
                address,
                blockno,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getHistoricalERC20TokenBalanceByContractAddressAndBlockNo Error: ${error.message}`);
        }
    }
    async getTokenInfoByContractAddress(contractaddress) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "token",
                action: "tokeninfo",
                contractaddress,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getTokenInfoByContractAddress Error: ${error.message}`);
        }
    }
    async getAddressERC721TokenInventoryByContractAddress(address, contractaddress, page, offset) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "account",
                action: "addresstokennftinventory",
                address,
                contractaddress,
                page,
                offset,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getAddressERC721TokenInventoryByContractAddress Error: ${error.message}`);
        }
    }
    async estimateConfirmationTime(gasprice) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "gastracker",
                action: "gasestimate",
                gasprice,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`estimateConfirmationTime Error: ${error.message}`);
        }
    }
    async getGasOracle() {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "gastracker",
                action: "gasoracle",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getGasOracle Error: ${error.message}`);
        }
    }
    async getEthereumDailyTotalGasUsed(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailygasused",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getEthereumDailyTotalGasUsed Error: ${error.message}`);
        }
    }
    async getDailyAverageGasPrice(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyavggaslimit",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getDailyAverageGasPrice Error: ${error.message}`);
        }
    }
    async getDailyAverageGasLimit(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyavggasprice",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getDailyAverageGasLimit Error: ${error.message}`);
        }
    }
    async getTotalEther() {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "ethsupply",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getTotalEther Error: ${error.message}`);
        }
    }
    async getTotalEther2() {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "ethsupply2",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getTotalEther2 Error: ${error.message}`);
        }
    }
    async getEtherLastPrice() {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "ethprice",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getEtherLastPrice Error: ${error.message}`);
        }
    }
    async getEtherNodesSize(startdate, enddate, clienttype, syncmode, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "chainsize",
                startdate,
                enddate,
                clienttype,
                syncmode,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getEtherNodesSize Error: ${error.message}`);
        }
    }
    async getTotalNodesCount() {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "nodecount",
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getTotalNodesCount Error: ${error.message}`);
        }
    }
    async getDailyNetworkTrxFee(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailytxnfee",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getDailyNetworkTrxFee Error: ${error.message}`);
        }
    }
    async getDailyNewAddressCount(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailynewaddress",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getDailyNewAddressCount Error: ${error.message}`);
        }
    }
    async getDailyNetworkUtilization(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailynetutilization",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getDailyNetworkUtilization Error: ${error.message}`);
        }
    }
    async getDailyAverageNetworkHashRate(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyavghashrate",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getDailyAverageNetworkHashRate Error: ${error.message}`);
        }
    }
    async getDailyTrxCount(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailytx",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getDailyTrxCount Error: ${error.message}`);
        }
    }
    async getDailyAverageNetworkDifficulty(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "dailyavgnetdifficulty",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getDailyAverageNetworkDifficulty Error: ${error.message}`);
        }
    }
    async getEtherHistoricalDailyMarketCap(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "ethdailymarketcap",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getEtherHistoricalDailyMarketCap Error: ${error.message}`);
        }
    }
    async getEtherHistoricalPrice(startdate, enddate, sort) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                module: "stats",
                action: "ethdailyprice",
                startdate,
                enddate,
                sort,
                apiKey: this.apiKey,
            };
            return this.wrapFetch(url, params);
        }
        catch (error) {
            throw new Error(`getEtherHistoricalPrice Error: ${error.message}`);
        }
    }
    async postVerifySourceCode(contractAddress, sourceCode, codeFormat, contractName, compilerversion, constructorArguements, evmversion, licenseType) {
        try {
            const url = `${this.apiUrl}`;
            const params = {
                apiKey: this.apiKey,
                module: "contract",
                action: "verifysourcecode",
                contractAddress,
                sourceCode,
                codeFormat,
                contractName,
                compilerversion,
                constructorArguements,
                evmversion,
                licenseType,
            };
            return this.wrapFetch(url, params, true);
        }
        catch (error) {
            throw new Error(`postVerifySourceCode Error: ${error.message}`);
        }
    }
    async wrapFetch(url, params, isPost = false) {
        const operation = isPost ? axios_1.default.post : axios_1.default.get;
        try {
            const res = await operation(url, {
                params: params,
            });
            const json = await res.data;
            if (json.status !== "1") {
                throw new Error(`Response status must to be '1'`);
            }
            return json;
        }
        catch (error) {
            throw new Error(`Failed to fetch: ${error.message}`);
        }
    }
}
exports.Etherscan = Etherscan;
//# sourceMappingURL=etherscan.js.map