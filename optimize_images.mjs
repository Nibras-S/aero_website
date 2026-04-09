import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const pubDir = path.resolve('./public');
const srcDir = path.resolve('./src');
const contentDir = path.resolve('./public/admin');

async function processImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processImages(fullPath);
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      const ext = path.extname(entry.name);
      const newName = entry.name.replace(new RegExp(ext + '$', 'i'), '.webp');
      const newPath = path.join(dir, newName);
      
      console.log('Optimizing', entry.name, '->', newName);
      try {
        await sharp(fullPath).webp({ quality: 80 }).toFile(newPath);
        
        // Only delete the original if it's different from the new one
        if (fullPath !== newPath) {
             await fs.unlink(fullPath);
             await updateReferences(entry.name, newName);
        }
      } catch (err) {
        console.error('Failed to process', fullPath, err.message);
      }
    }
  }
}

async function updateReferences(oldName, newName) {
   // Update across src and public/admin
   const dirs = [srcDir, contentDir];
   for (const root of dirs) {
     await searchAndReplace(root, oldName, newName);
   }
}

async function searchAndReplace(dir, oldTerm, newTerm) {
  try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          await searchAndReplace(fullPath, oldTerm, newTerm);
        } else if (/\.(astro|md|ts|js|json|yml|css|html|tsx)$/.test(entry.name)) {
            let content = await fs.readFile(fullPath, 'utf8');
            // strictly replace the exact filename occurrence
            const regex = new RegExp(oldTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            if (regex.test(content)) {
                content = content.replace(regex, newTerm);
                await fs.writeFile(fullPath, content, 'utf8');
                console.log('  Updated references in', fullPath);
            }
        }
      }
  } catch(e) {
    // Ignore read errors
  }
}

(async () => {
    console.log('Starting optimization loop...');
    await processImages(pubDir);
    console.log('Complete');
})();
