import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fixed pickup line, spoken by a vending machine to a passing human.
// Deterministic by design: the same single line is written on every run.
const LINE =
  "You don't need exact change — just smile, press B7, and I'll jam my own coil to drop the last bag at your feet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
