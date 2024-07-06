import Link from "next/link";
import BrandLogo from "../UI/brand-logo";
import CryptoList from "../crypto-list/crypto-list";

function Header() {
  return (
    <header className="px-20 pt-3">
      <div className="flex items-center justify-between p-5 bg-black/90 rounded-full">
        <Link href={"/"}>
          <BrandLogo />
        </Link>
        <CryptoList />
      </div>
    </header>
  );
}

export default Header;
