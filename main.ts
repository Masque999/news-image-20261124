// Writes this entry's image to /output/entry.png. The image is a newspaper
// front page summing up the world's news of Tuesday 24 November 2026: Seoul
// scrambles jets as a suspected North Korean aircraft breaches its airspace,
// allies warn Russia may launch a nuclear space weapon, hacked data puts
// Russia's war dead near 500,000, Huang $34bn richer in a day, and Gomez
// quits after an ethics finding. It is copied byte for byte, so both runs of
// the program write identical bytes.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(outDir, { recursive: true });
const src = join(here, 'entry.png');
const dst = join(outDir, 'entry.png');
copyFileSync(src, dst);
const copied = statSync(dst);
if (!copied.isFile() || copied.size !== statSync(src).size) {
  throw new Error('entry.png copy incomplete');
}
