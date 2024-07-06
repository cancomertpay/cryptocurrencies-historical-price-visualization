import CryptoListItem from "./crypto-list-item";

function CryptoList() {
  const navList = [
    { href: "BTC", title: "Bitcoin" },
    { href: "AAVE", title: "Aave" },
    { href: "EGLD", title: "Elrond" },
    { href: "ETC", title: "Ethereum Classic" },
    { href: "ETH", title: "Ethereum" },
    { href: "LTC", title: "Litecoin" },
    { href: "SOL", title: "Solana" },
  ];
  return (
    <ul className="h-fit flex item-center justify-center gap-10">
      {navList.map((item) => (
        <CryptoListItem key={item.href} item={item} />
      ))}
    </ul>
  );
}

export default CryptoList;
