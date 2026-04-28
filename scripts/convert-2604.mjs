import sharp from '/Users/brendan/projects/ganson-web-app/node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = '/Users/brendan/projects/ganson-web-app';
const SRC = path.join(ROOT, 'docs/Project Images 24.04.26');
const DST = path.join(ROOT, 'public/assets/projects');

async function convert(src, dest) {
  await sharp(src)
    .rotate()
    .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dest);
  return fs.statSync(dest).size;
}

function logWrite(p, size) {
  console.log(`  wrote ${path.relative(ROOT, p)} (${Math.round(size/1024)}KB)`);
}

// 1. Donabate — replace all webp with 4 new images (drone first as cover)
console.log('--- Donabate: replacing all images ---');
const donabateDir = path.join(DST, 'donabate');
for (const f of fs.readdirSync(donabateDir).filter(f => f.endsWith('.webp'))) {
  fs.unlinkSync(path.join(donabateDir, f));
  console.log(`  removed ${f}`);
}
const donabateOrder = [
  'Donabate/DJI_20250904163429_0735_D.jpg',
  'Donabate/Screenshot 2026-04-24 105625.png',
  'Donabate/Screenshot 2026-04-24 105712.png',
  'Donabate/20250901_110816.jpg',
];
for (let i = 0; i < donabateOrder.length; i++) {
  const out = path.join(donabateDir, `0${i+1}.webp`);
  const sz = await convert(path.join(SRC, donabateOrder[i]), out);
  logWrite(out, sz);
}

// 2. Earls Hotel — drop crane erection (01,03,04,06,07,08), keep 02,05, add screenshot as new cover
console.log('--- Earls Hotel: removing crane erection, adding new cover ---');
const earlsDir = path.join(DST, 'earls-hotel-pembroke-st-dublin');
// Move keepers off path first
fs.renameSync(path.join(earlsDir, '02.webp'), path.join(earlsDir, '_keep_02.webp'));
fs.renameSync(path.join(earlsDir, '05.webp'), path.join(earlsDir, '_keep_05.webp'));
// Delete remaining (crane erection ones)
for (const f of fs.readdirSync(earlsDir).filter(f => f.endsWith('.webp') && !f.startsWith('_keep'))) {
  fs.unlinkSync(path.join(earlsDir, f));
  console.log(`  removed ${f}`);
}
// New screenshot as 01 (cover)
const earlsOut01 = path.join(earlsDir, '01.webp');
const earlsSz = await convert(path.join(SRC, 'Earls Hotel, Pembroke St, Dublin/Screenshot 2026-04-24 110251.png'), earlsOut01);
logWrite(earlsOut01, earlsSz);
// Restore keepers as 02, 03
fs.renameSync(path.join(earlsDir, '_keep_02.webp'), path.join(earlsDir, '02.webp'));
fs.renameSync(path.join(earlsDir, '_keep_05.webp'), path.join(earlsDir, '03.webp'));
console.log(`  kept old 02.webp -> 02.webp, old 05.webp -> 03.webp`);

// 3. Hamilton Dock — keep current 01 (existing CGI cover), add 5 new as 02-06
console.log('--- Hamilton Dock: appending 5 new images ---');
const hamiltonDir = path.join(DST, 'hamilton-dock-hotel-belfast');
const hamiltonOrder = [
  'Hamilton Dock Hotel, Belfast/Screenshot 2026-04-24 110759.png',
  'Hamilton Dock Hotel, Belfast/Hamilton Dock Hotel, Belfast (1).jpg',
  'Hamilton Dock Hotel, Belfast/DSC_0045.JPG',
  'Hamilton Dock Hotel, Belfast/bcd84c98-ddc0-4be5-a550-b6238018f900.JPG',
  'Hamilton Dock Hotel, Belfast/ebec8c01-4ba5-4542-9b37-a2c3d2d04260.JPG',
];
for (let i = 0; i < hamiltonOrder.length; i++) {
  const num = i + 2;
  const out = path.join(hamiltonDir, `0${num}.webp`);
  const sz = await convert(path.join(SRC, hamiltonOrder[i]), out);
  logWrite(out, sz);
}

// 4. Crumlin NH — append 2 CGIs as 02, 03
console.log('--- Crumlin NH: appending 2 CGIs ---');
const crumlinDir = path.join(DST, 'crumlin-nursing-home');
for (const [i, name] of ['CGI 1 v02.jpg', 'CGI 2 v02.jpg'].entries()) {
  const num = i + 2;
  const out = path.join(crumlinDir, `0${num}.webp`);
  const sz = await convert(path.join(SRC, 'Crumlin Nursing Home', name), out);
  logWrite(out, sz);
}

// 5. Kilbride — append 1 CGI as 10
console.log('--- Kilbride: appending CGI ---');
const kilbrideDir = path.join(DST, 'kilbride-education-campus');
const kilbrideOut = path.join(kilbrideDir, '10.webp');
const kilbrideSz = await convert(path.join(SRC, 'Kilbride Education Campus/Screenshot 2026-04-24 112332.png'), kilbrideOut);
logWrite(kilbrideOut, kilbrideSz);

// 6. Lidl Craigavon — convert image, project entry to be added later
console.log('--- Lidl Craigavon: converting image ---');
const craigavonOut = path.join(DST, 'lidl-craigavon/01.webp');
const craigavonSz = await convert(path.join(SRC, 'Lidl Craigavon/Screenshot 2026-04-22 145018.png'), craigavonOut);
logWrite(craigavonOut, craigavonSz);

console.log('--- Done ---');
