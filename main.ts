// Laugh Track: The Crypto Trading Joke Contest
// Writes one crypto trading joke (1-200 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "The group chat promised generational wealth. Generations of my family will indeed hear about this loss.";

const OUTPUT_PATH = "/output/entry.txt";

// The competition gate accepts only UTF-8 text of 1 to 200 characters that
// is not only white space. Trim the joke and check it against that gate
// before writing, so a stray space or an over-long edit can never slip an
// invalid entry through.
const joke = JOKE.trim();
const charCount = [...joke].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`joke must be 1-200 characters, got ${charCount}`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, joke + "\n", "utf8");
