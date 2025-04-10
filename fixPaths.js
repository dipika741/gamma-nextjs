const fs = require('fs');
const path = require('path');

// Directory to start searching from (your project root)
const BASE_DIR = path.resolve(__dirname);

// File types to scan and replace in
const FILE_TYPES = ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.html'];

// Find and replace rules
const REPLACE_RULES = [
    {
        match: /(["'`])\/assets\//g,
        replace: '$1/nextjs/assets/',
    },
    {
        match: /\(\/assets\//g, // for url(/assets/ in CSS
        replace: '(/nextjs/assets/',
    },
];

function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let changed = false;

    REPLACE_RULES.forEach(({ match, replace }) => {
        if (match.test(updatedContent)) {
            updatedContent = updatedContent.replace(match, replace);
            changed = true;
        }
    });

    if (changed) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`✅ Updated: ${filePath}`);
    }
}

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && file !== 'node_modules') {
            walk(fullPath);
        } else if (FILE_TYPES.includes(path.extname(fullPath))) {
            processFile(fullPath);
        }
    });
}

// Run it!
walk(BASE_DIR);
