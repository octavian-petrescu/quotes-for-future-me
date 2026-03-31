import Cors from "cors";
import { track } from "@vercel/analytics/server";

import { initMiddleware } from "../../helpers/middleware";
import { getRandomQuote } from "../../helpers/quotes";

const cors = initMiddleware(
  Cors({
    methods: ["GET"]
  })
);

export default async function getQuote(req, res) {
  await cors(req, res);

  track("quote_requested");

  res.status(200).json(getRandomQuote());
};
