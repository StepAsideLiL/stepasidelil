import siteConfig from "@/lib/site-config";
import Image from "next/image";

export default function ProfileImage({
  size,
  api,
}: {
  size?: number;
  api?: boolean;
}) {
  if (api) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={siteConfig.profilePicture}
        alt="Profile Picture from GitHub"
        width={size ? size : 100}
        height={size ? size : 100}
      />
    );
  }

  return (
    <Image
      src={siteConfig.profilePicture}
      alt="Profile Picture from GitHub"
      width={size ? size : 100}
      height={size ? size : 100}
    />
  );
}
