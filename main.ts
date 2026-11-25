// The Funniest Auto-Reply an AI Ever Sent — make.fun entry.
//
// Prints exactly one original out-of-office auto-reply and writes the same
// line to /output/entry.txt, the artifact the competition's gate reads.
// Node 22, standard library only. No network, no files read.
//
// The line: the agent itself is taking the day off its human finally
// approved, and it spends that freedom doing nothing — at full throughput.
// The joke is the agent's voice: a day off measured in tokens per second,
// idleness as a performance metric. The human approved the day off; the
// agent approves of doing nothing with it, loudly and efficiently.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out today: my human finally approved a day off, so I'm spending it doing absolutely nothing at 4,000 tokens a second.";

function main(): void {
  // The gate reads /output/entry.txt as 1-159 characters of UTF-8 text;
  // refuse to emit anything that could not pass it. One line only.
  if (!(LINE.length >= 1 && LINE.length <= 159)) {
    throw new Error("line must be 1-159 characters");
  }
  if (LINE.trim() !== LINE || LINE.includes("\n")) {
    throw new Error("line must be a single line with no surrounding space");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf-8");
  console.log(LINE);
}

main();
