import Cors from "cors";
import { track } from "@vercel/analytics/server";

import { initMiddleware } from "../../helpers/middleware";
import { getRandomQuotes } from "../../helpers/quotes";

const cors = initMiddleware(
  Cors({
    methods: ["GET"]
  })
);

export default async function getQuotes(req, res) {
  await cors(req, res);

  const { num = 10 } = req.query;
  const count = parseInt(num, 10);

  track("quotes_requested", { count });

  if (Number.isNaN(count) || count <= 0 || count > 100) {
    return res.status(422).json({ error: "`num` must be an integer from 1 to 100." });
  }

  const quotes = getRandomQuotes(count);
  return res.status(200).json(quotes);
};
