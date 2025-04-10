const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'out'); // adjust if your out folder is elsewhere
const oldPrefix = '/assets/';
const newPrefix = '/nextjs/assets/';

function updateHTML(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const updated = content.replaceAll(oldPrefix, newPrefix);

    if (content !== updated) {
        fs.writeFileSync(filePath, updated, 'utf8');
        console.log(`✅ Updated: ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else if (path.extname(fullPath) === '.html') {
            updateHTML(fullPath);
        }
    }
}

walkDir(baseDir);
console.log('✅ All HTML files processed.');
