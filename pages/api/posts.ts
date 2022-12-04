import { NextApiRequest, NextApiResponse } from "next";
import { getFrontmatter } from "../../lib/blog";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const posts = getFrontmatter();
  res.status(200).json(posts);
}
