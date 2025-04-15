const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "public/assets/imgs/products");

// Helper to slugify names
const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Recursively rename folders and files
const renameContents = (currentPath) => {
    const items = fs.readdirSync(currentPath);

    items.forEach((item) => {
        const oldPath = path.join(currentPath, item);
        const stats = fs.statSync(oldPath);

        let newName;

        if (stats.isDirectory()) {
            // Slugify folder name
            newName = slugify(item);
        } else {
            // Split file into name and extension
            const ext = path.extname(item); // e.g., ".jpg"
            const name = path.basename(item, ext); // e.g., "Block Heater"
            newName = `${slugify(name)}${ext.toLowerCase()}`;
        }

        const newPath = path.join(currentPath, newName);

        // Only rename if the name has changed
        if (newName !== item) {
            fs.renameSync(oldPath, newPath);
            console.log(`Renamed: ${oldPath} → ${newPath}`);
        }

        // Recurse into subfolders
        if (stats.isDirectory()) {
            renameContents(path.join(currentPath, newName));
        }
    });
};

renameContents(baseDir);
console.log("✅ Renaming completed!");
