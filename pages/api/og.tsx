/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from 'next/server';

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const hasTitle = searchParams.has("title");

  const title = hasTitle ?
    searchParams.get("title") :
    "mutecipher";

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: 'black',
          backgroundSize: '150px 150px',
          height: '100%',
          width: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          <img
            alt="Profile Picture"
            src="https://fickle-fingers.vercel.app/images/profile.jpg"
            tw="rounded-full shadow-md border-2 border-zinc-200"
            width={200}
          />
        </div>
        <div
          style={{
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            color: 'white',
            marginTop: 30,
            padding: '0 120px',
            lineHeight: 1.4,
            whiteSpace: 'pre-wrap',
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: 'fluent'
    }
  )
};
