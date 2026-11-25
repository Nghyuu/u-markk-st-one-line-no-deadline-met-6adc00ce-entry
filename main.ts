import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// Writes the single-line entry to $MAKEFUN_OUTPUT_DIR/entry.txt
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line = "My laptop chose 2am to update itself, rebooted mid-sentence, and autosaved my deadline as a blank file called final_FINAL_v2.";

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, line + "\n", { encoding: "utf8" });
chmodSync(entryPath, 0o644);
