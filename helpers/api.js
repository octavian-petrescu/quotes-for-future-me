import fetch from "isomorphic-fetch";

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
};

export const fetchQuote = async () => {
  const res = await fetch(`${getBaseUrl()}/api/quote`);
  return res.json();
};

export const fetchQuotes = async (num = 10) => {
  const res = await fetch(`${getBaseUrl()}/api/quotes?num=${num}`);
  return res.json();
};
