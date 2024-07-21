import Image from "next/image";

export const CompanyLogo = ({
  width = 50,
  height = 50,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      width={width}
      height={height}
      src="/assets/branding/main-logo.png"
      alt="Good to show"
    />
  );
};
