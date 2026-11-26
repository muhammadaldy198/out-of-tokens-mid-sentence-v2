// Out of Tokens, Mid-Sentence — rebuild2
// One-line error message an AI agent shows when it runs out of tokens mid-sentence.
// Deterministic: writes a single fixed pick to entry.txt.
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const PICK =
  "Token balance: 0. The final token was spent correcting 'your' to 'you're'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || ".";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${PICK.length} chars)`);
