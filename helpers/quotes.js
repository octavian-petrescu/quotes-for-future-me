import data from "../data/quotes.json";
import { getIntBetween, shuffle } from "./general";

export const getRandomQuote = () => data.quotes[getIntBetween(0, data.quotes.length - 1)];

export const getRandomQuotes = (count = 10) => shuffle([...data.quotes]).slice(0, count);
