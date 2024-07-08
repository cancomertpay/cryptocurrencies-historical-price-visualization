import cryptoList from "@/data";
import CryptoCard from "./crypto-card";

function CryptoList() {
  return (
    <div>
      <ul className="grid gap-8 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5">
        {cryptoList.map((item, index) => (
          <CryptoCard
            key={index}
            symbol={item.symbol}
            dataList={item.historicalPrice}
          />
        ))}
      </ul>
    </div>
  );
}

export default CryptoList;
