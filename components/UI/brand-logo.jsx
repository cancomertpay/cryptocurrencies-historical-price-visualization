import Image from "next/image"
import brandLogo from "@/public/brand-logo.png"

function BrandLogo() {
  return (
    <Image src={brandLogo} alt="Brand logo" height={54} width={54} />
  )
}

export default BrandLogo