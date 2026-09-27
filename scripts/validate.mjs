import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const required = [
  "app/layout.tsx",
  "app/page.tsx",
  "app/error.tsx",
  "app/not-found.tsx",
  "app/favicon.ico",
  "lib/translations.ts",
  "components/three/HeroScene.tsx",
  "components/three/FloatingCapsule.tsx",
  "public/images/pharmacy-interior.jpg",
  "public/images/pharmacist-profile.jpg",
  "public/images/medication-guidance.jpg",
  "public/images/personalized-care.jpg",
  "public/images/african-healthcare.jpg"
];

const failures = [];
for (const file of required) {
  if (!existsSync(join(root, file))) failures.push(`Missing required file: ${file}`);
}

function collect(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? collect(path) : [path];
  });
}

const sources = [...collect(join(root, "app")), ...collect(join(root, "components")), ...collect(join(root, "hooks")), ...collect(join(root, "lib"))]
  .filter((file) => /\.(ts|tsx)$/.test(file));

for (const file of sources) {
  const text = readFileSync(file, "utf8");
  const rel = relative(root, file);
  if (/useEffect\s*\(\s*async\s*\(/.test(text) || /useEffect\s*\(\s*async\s+function/.test(text)) failures.push(`Async useEffect callback: ${rel}`);
  if (/return\s+async\s*\(/.test(text) || /return\s+async\s+function/.test(text)) failures.push(`Async cleanup candidate: ${rel}`);
  if (/https:\/\/www\.magnific\.com\/free-photo\//.test(text)) failures.push(`Remote Magnific page URL used in runtime source: ${rel}`);
  if (/console\.clear\s*\(/.test(text)) failures.push(`console.clear is forbidden: ${rel}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Static project validation passed (${sources.length} TypeScript source files checked).`);
