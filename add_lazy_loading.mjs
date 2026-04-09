import fs from 'fs/promises';
import path from 'path';

const srcDir = path.resolve('./src');

async function addLazyLoading(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await addLazyLoading(fullPath);
        } else if (entry.name.endsWith('.astro') || entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {
            // Ignore hero sections where LCP is critical
            if (entry.name.includes("Hero") || entry.name.includes("HeroSection") || entry.name.includes("hero")) continue;
            
            let content = await fs.readFile(fullPath, 'utf8');
            let modified = false;

            // Simple regex replacement that ensures we only add it if it's missing
            const newContent = content.replace(/<img(?!\s+[^>]*\bloading=["']lazy["'])/g, '<img loading="lazy" decoding="async"');
            
            if (newContent !== content) {
                await fs.writeFile(fullPath, newContent, 'utf8');
                console.log('Added native lazy-loading to', entry.name);
            }
        }
    }
}

addLazyLoading(srcDir).catch(console.error);
