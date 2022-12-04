import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  response: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    res.status(405);
  }
  res.status(200).json({ response: "alive" });
}
