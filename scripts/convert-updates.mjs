import sharp from '/Users/brendan/projects/ganson-web-app/node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = '/Users/brendan/projects/ganson-web-app';

const jobs = [
  { src: 'updates/Crumlin Nursing Home.jpg', dest: 'crumlin-nursing-home', out: '01', removePlaceholder: true },
  { src: 'updates/Louth GAA Stadium.jpg', dest: 'louth-gaa-stadium', out: '01', removePlaceholder: true },
  { src: 'updates/Hamilton Dock Hotel, Belfast.jpg', dest: 'hamilton-dock-hotel-belfast', out: '01', removePlaceholder: true },
  { src: 'updates/James McSweeney House, Apartments.png', dest: 'james-mcsweeney-house-apartments', out: '01', removePlaceholder: true },
  { src: 'updates/Donabate.jpg', dest: 'donabate', out: '03' },
  { src: 'updates/Earls Hotel, Pembroke St, Dublin -1.jpeg', dest: 'earls-hotel-pembroke-st-dublin', out: '07' },
  { src: 'updates/Earls Hotel, Pembroke St, Dublin -2.jpeg', dest: 'earls-hotel-pembroke-st-dublin', out: '08' },
  { src: 'updates/Kilbride Education Campus.jpg', dest: 'kilbride-education-campus', out: '09' },
];

for (const job of jobs) {
  const srcPath = path.join(ROOT, job.src);
  const destDir = path.join(ROOT, 'public/assets/projects', job.dest);
  const outPath = path.join(destDir, `${job.out}.webp`);
  await sharp(srcPath)
    .rotate()
    .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outPath);
  const size = fs.statSync(outPath).size;
  console.log(`wrote ${outPath} (${(size / 1024).toFixed(0)}KB)`);
  if (job.removePlaceholder) {
    const ph = path.join(destDir, 'placeholder.webp');
    if (fs.existsSync(ph)) {
      fs.unlinkSync(ph);
      console.log(`removed ${ph}`);
    }
  }
}
