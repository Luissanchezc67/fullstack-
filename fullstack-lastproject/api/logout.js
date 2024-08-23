import { actionLogout } from "@/app/actions";


export default async function handler(req, res) {
  if (req.method === "POST") {
    await actionLogout();
    res.status(200).end();
  } else {
    res.status(405).send("Method Not Allowed");
  }
}