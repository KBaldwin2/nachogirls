import Image from "next/image";

export const CompanyLogo = ({
  width = 100,
  height = 100,
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
