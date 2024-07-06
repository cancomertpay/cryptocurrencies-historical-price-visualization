import aaveData from "@/archive/Aave.json";
import btcData from "@/archive/Bitcoin.json";
import egldData from "@/archive/Elrond.json";
import etcData from "@/archive/Ethereum_classic.json";
import ethData from "@/archive/Ethereum.json";
import ltcData from "@/archive/Litecoin.json";
import solData from "@/archive/Solana.json";


const cryptoList = [
  { symbol: "AAVE", historicalPrice: aaveData },
  { symbol: "BTC", historicalPrice: btcData },
  { symbol: "EGLD", historicalPrice: egldData },
  { symbol: "ETC", historicalPrice: etcData },
  { symbol: "ETH", historicalPrice: ethData },
  { symbol: "LTC", historicalPrice: ltcData },
  { symbol: "SOL", historicalPrice: solData },
];

export default cryptoList