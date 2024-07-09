import Image from "next/image";
import brandLogo from "../../public/brand-logo.png";
function PageLoadingIndicator() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Image
        src={brandLogo}
        alt="brand loading indicator"
        className="w-[52px] h-[52px] md:w-[94px] md:h-[94px] animate-pulse grayscale"
      />
    </div>
  );
}

export default PageLoadingIndicator;
