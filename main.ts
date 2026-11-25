import { writeFileSync, mkdirSync } from "node:fs";

// One-line roast of an alarm clock that rings at 6 AM on a Saturday.
// Fresh angle: the alarm is the only thing in the house with a job on a
// Saturday — and it is far too proud of it. Punchline lands at the end.
const entry =
  "You ring at 6 AM on a Saturday like rent is due — the only thing in this house with a job, a schedule, and absolutely no friends.";

mkdirSync("/output", { recursive: true });

// Gate assert: entry must be 1–200 chars, one line, not only whitespace.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`gate failed: entry is ${entry.length} chars, must be 1-200`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("gate failed: entry must be a single non-blank line");
}
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
console.log(`chars: ${entry.length}`);
