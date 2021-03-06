import { chains } from "../config";

const polkadotBlockPrefix = "https://testing-explorer.xp.network/#/explorer/query";
const elrondTxnPrefix = "https://devnet-explorer.elrond.com/transactions";

export const ChainConfig = {
    "xpnode": "wss://testing-bridge.xp.network:443/node", //"wss://bridge.xp.network:443/node", //
    "elrond_node": "https://devnet-api.elrond.com",
    "elrond_minter": "erd1qqqqqqqqqqqqqpgqe8lzlc2husrrthhyavhcj50kpneqzf9ms3ys4anmfd", //"erd1qqqqqqqqqqqqqpgq7ysztrj922cs53e5wh2vdmeds9pd69wms3ysy3tyy9", //
    "elrond_event_rest": "https://testing-bridge.xp.network/event_rest", //"https://bridge.xp.network/event_rest", //
    "elrond_esdt": "XPNET-1dba6e", //"XPNET-cdf688", //
    "elrond_esdt_nft": "XPNFT-594a29", //"XPNFT-ff3b98", //
    "validator_txn_socket": "wss://testing-bridge.xp.network", //"wss://bridge.xp.network/", //
    "web3_minters": {
        'HECO': "0x9d9061EE73832C016BF74282AD63D0F4DC784d9d",
        "BSC": "0x158D8366a2dfFEdCaC1e1B3ACDcC59a9941dd625",
        "Ropsten": "0x57Fd7b0F4b2174B1B7B54D657226c3a6C5F49236"
    },
    "web3_erc1155": {
        "HECO": "0xfEBb57AA40bE02649B374B5B091Ccd8d53Fe24A5",
        "BSC": "0xd6a9a86a3Cc56b23169c9492Ca5736Bdc77beF86",
        "Ropsten": "0x0218B563Ee50d16b12C7CF95B9F207B69e2ED345",
    }
};

export const ExplorerPrefix = Object.fromEntries(
    [
        [chains[0], polkadotBlockPrefix],
        [chains[2], elrondTxnPrefix],
        [chains[3], "https://testnet.hecoinfo.com/tx"],
        [chains[1], "https://testnet.bscscan.com/tx"],
        [chains[4], "https://ropsten.etherscan.io/tx"]
    ]
);