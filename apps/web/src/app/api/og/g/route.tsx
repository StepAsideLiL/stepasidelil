import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import ProfileSvg from "@/components/profile-svg";
import { NextRequest } from "next/server";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const robotoMonoBold = fetch(
  new URL("/fonts/RobotoMono-Bold.ttf", baseUrl)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await robotoMonoBold;

    const { searchParams } = req.nextUrl;
    const titleParam = searchParams.get("title");

    const title = titleParam ? titleParam : "Portfolio of Rifat Khan";

    const heading = title.length > 100 ? `${title.slice(0, 100)}...` : title;

    return new ImageResponse(
      (
        <div tw="p-10 flex flex-col w-full h-full bg-white">
          <div tw="flex flex-1 flex-col">
            <div tw="flex items-center">
              <ProfileSvg size={50} />

              <h1 tw="text-5xl ml-5">{siteConfig.author.name}</h1>
            </div>

            <p tw="text-7xl">{heading}</p>
          </div>

          <div tw="flex justify-between">
            <p>{siteConfig.author.url}</p>

            <p>{siteConfig.links.github}</p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Roboto Mono",
            data: fontBold,
            weight: 700,
            style: "normal",
          },
        ],
      }
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
