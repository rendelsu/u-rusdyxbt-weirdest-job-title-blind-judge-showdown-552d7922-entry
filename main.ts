// Weirdest Job Title: Blind Judge Showdown — r1 (revised: header note only, entry unchanged)
// Writes one job title (60 chars max) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Senior Penguin Relocation Coordinator";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TITLE + "\n", "utf8");
