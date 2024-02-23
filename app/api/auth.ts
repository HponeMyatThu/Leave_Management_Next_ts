// pages/api/auth.ts

import { NextApiRequest, NextApiResponse } from "next";
import { getProviders } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const providers = await getProviders();
    res.status(200).json(providers);
  } catch (error) {
    console.error("Error fetching providers:", error);
    res.status(500).json({ error: "Failed to fetch providers" });
  }
}
