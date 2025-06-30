import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import ProfileSvg from "@/components/profile-svg";
import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

const robotoMonoBold = fs.readFileSync(
  path.join(process.cwd(), "public/fonts/RobotoMono-Bold.ttf")
);

export async function GET(req: NextRequest) {
  try {
    const fontBold = robotoMonoBold;

    const { searchParams } = req.nextUrl;
    const titleParam = searchParams.get("title");

    const title = titleParam ? titleParam : "Portfolio of Rifat Khan";

    const heading = title.length > 100 ? `${title.slice(0, 100)}...` : title;

    return new ImageResponse(
      (
        <div
          style={{
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: "1 1 0%",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ProfileSvg size={50} />
              <h1
                style={{
                  fontSize: "3rem",
                  lineHeight: "1",
                  marginLeft: "1.25rem",
                }}
              >
                {siteConfig.author.name}
              </h1>
            </div>
            <p
              style={{
                fontSize: "4.5rem",
                lineHeight: "1",
              }}
            >
              {heading}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
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
    console.log(error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
