import axiosInstance from "@/lib/axios";
import axios from "@/lib/axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const fetch = await axiosInstance.post("/api/auth/signup", {
        name: req.body.username,
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
      });
      console.log(fetch.data.data, "WOIOI");
      res.status(200).json({ success: true });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
