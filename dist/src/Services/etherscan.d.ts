import { IResponse } from "src/Interfaces/response.interface";
export declare class Etherscan {
    private apiKey;
    private apiUrl;
    constructor(apiKey: string, apiUrl?: string);
    getSingleEtherBalance(address: string, tag?: string): Promise<IResponse>;
    getMultipleEtherBalance(addresses: string[], tag?: string): Promise<IResponse>;
    getTrxList(address: string, startblock: number, endblock: number, page: number, offset: number, sort: string): Promise<IResponse>;
    getInternalTrxListByAddress(address: string, startblock: number, endblock: number, page: number, offset: number, sort: string): Promise<IResponse>;
    getInternalTrxListByHash(txhash: string): Promise<IResponse>;
    getInternalTrxListByBlockRange(startblock: number, endblock: number, page: number, offset: number, sort: string): Promise<IResponse>;
    getERC20TokenTransferEventList(address: string, contractAddress: string, page: number, offset: number, startblock: number, endblock: number, sort: string): Promise<IResponse>;
    getERC721TokenTransferEventList(address: string, contractAddress: string, page: number, offset: number, startblock: number, endblock: number, sort: string): Promise<IResponse>;
    getERC1155TokenTransferEventList(address: string, contractAddress: string, page: number, offset: number, startblock: number, endblock: number, sort: string): Promise<IResponse>;
    getMinedBlocksByAddress(address: string, blocktype: string, page: number, offset: number): Promise<IResponse>;
    getHistoricalEtherBalance(address: string, blockno: number): Promise<IResponse>;
    getContractAbi(address: string): Promise<IResponse>;
    getContractSourceCode(address: string): Promise<IResponse>;
    checkContractExecutionStatus(txhash: string): Promise<IResponse>;
    checkTransactionReceiptStatus(txhash: string): Promise<IResponse>;
    getBlockandUncleReward(blockno: number): Promise<IResponse>;
    getEstimatedBlockCountdownTime(blockno: number): Promise<IResponse>;
    getBlockNumberByTimestamp(timestamp: number, closest: string): Promise<IResponse>;
    getDailyAverageBlockSize(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getDailyAverageBlockCountAndRewards(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getDailyBlockRewards(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getDailyAverageBlockTime(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getDailyUncleBlockCountAndRewards(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getEventLogsByAddress(address: string, fromBlock: number, toBlock: number, page: number, offset: number): Promise<IResponse>;
    getEventLogsByTopics(fromBlock: number, toBlock: number, topic0: string, topic0_1_opr: string, topic1: string, page: number, offset: number): Promise<IResponse>;
    getEventLogsByAddressFilteredByTopics(fromBlock: number, toBlock: number, address: string, topic0: string, topic0_1_opr: string, topic1: string, page: number, offset: number): Promise<IResponse>;
    getRecentBlockNumber(): Promise<IResponse>;
    getBlockbyNumber(tag: string, boolean: string): Promise<IResponse>;
    getUncleByBlockNumberAndIndex(tag: string, index: string): Promise<IResponse>;
    getBlockTransactionCountByNumber(tag: string): Promise<IResponse>;
    getTransactionByHash(txhash: string): Promise<IResponse>;
    getTransactionByBlockNumberAndIndex(tag: string, index: string): Promise<IResponse>;
    getTransactionCount(tag: string): Promise<IResponse>;
    sendRawTransaction(hex: string): Promise<IResponse>;
    getTransactionReceipt(txhash: string): Promise<IResponse>;
    call(to: string, data: string, tag: string): Promise<IResponse>;
    getCode(address: string, tag: string): Promise<IResponse>;
    getStorageAt(address: string, position: string, tag: string): Promise<IResponse>;
    gasPrice(): Promise<IResponse>;
    estimateGas(data: string, to: string, value: string, gasPrice: string, gas: string): Promise<IResponse>;
    getERC20TokenTotalSupply(contractaddress: string): Promise<IResponse>;
    getERC20TokenBalance(contractaddress: string, address: string, tag: string): Promise<IResponse>;
    getHistoricalERC20TokenTotalSupplyByContractAddressAndBlockNo(contractaddress: string, blockno: number): Promise<IResponse>;
    getHistoricalERC20TokenBalanceByContractAddressAndBlockNo(contractaddress: string, address: string, blockno: number): Promise<IResponse>;
    getTokenInfoByContractAddress(contractaddress: string): Promise<IResponse>;
    getAddressERC721TokenInventoryByContractAddress(address: string, contractaddress: string, page: number, offset: number): Promise<IResponse>;
    estimateConfirmationTime(gasprice: number): Promise<IResponse>;
    getGasOracle(): Promise<IResponse>;
    getEthereumDailyTotalGasUsed(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getDailyAverageGasPrice(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getDailyAverageGasLimit(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getTotalEther(): Promise<IResponse>;
    getTotalEther2(): Promise<IResponse>;
    getEtherLastPrice(): Promise<IResponse>;
    getEtherNodesSize(startdate: string, enddate: string, clienttype: string, syncmode: string, sort: string): Promise<IResponse>;
    getTotalNodesCount(): Promise<IResponse>;
    getDailyNetworkTrxFee(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getDailyNewAddressCount(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getDailyNetworkUtilization(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getDailyAverageNetworkHashRate(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getDailyTrxCount(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getDailyAverageNetworkDifficulty(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getEtherHistoricalDailyMarketCap(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    getEtherHistoricalPrice(startdate: string, enddate: string, sort: string): Promise<IResponse>;
    postVerifySourceCode(contractAddress: string, sourceCode: string, codeFormat: string, contractName: string, compilerversion: string, constructorArguements: string, evmversion: string, licenseType: number): Promise<IResponse>;
    private wrapFetch;
}
