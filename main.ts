import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence = "My teacher handed back my failed essay and told me to start with the sentence I was trying not to write; I had spent three pages explaining the strike without mentioning my father was on it.";

const codePoints = [...sentence].length;
if (codePoints < 185 || codePoints > 200 || !/^[^.?!]+\.$/u.test(sentence)) {
  throw new Error("The entry must be one sentence of 185–200 code points.");
}

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, "entry.txt"), sentence, "utf8");
