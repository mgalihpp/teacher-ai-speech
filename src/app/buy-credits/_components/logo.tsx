import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={"/images/Nanami.jpg"}
      alt="logo"
      width={30}
      height={30}
      loading="lazy"
      className="object-cover"
    />
  );
};

export default Logo;
