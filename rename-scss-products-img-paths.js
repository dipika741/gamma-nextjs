const fs = require("fs");
const path = require("path");

// Your SCSS folder path
const SCSS_DIR = path.join(__dirname, "src/assets/scss");

// Regex to match paths like public/assets/imgs/products/...
const IMAGE_PATH_REGEX = /public\/assets\/imgs\/products\/([^\s"'()]+)/gi;

// Slugify (kebab-case) helper
const slugify = (str) =>
    str
        .replace(/\.[^/.]+$/, '') // remove extension
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

// Process all .scss files
const updateScssFiles = (dir) => {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);

        if (fs.statSync(fullPath).isDirectory()) {
            updateScssFiles(fullPath); // recurse into subfolders
        } else if (file.endsWith(".scss")) {
            let content = fs.readFileSync(fullPath, "utf8");

            const updated = content.replace(IMAGE_PATH_REGEX, (match, subpath) => {
                const parts = subpath.split("/").map((p) => {
                    const ext = path.extname(p);
                    return ext ? slugify(p) + ext : slugify(p);
                });

                return "public/assets/imgs/products/" + parts.join("/");
            });

            if (content !== updated) {
                fs.writeFileSync(fullPath, updated, "utf8");
                console.log(`✅ Updated: ${fullPath}`);
            }
        }
    }
};

updateScssFiles(SCSS_DIR);
console.log("🎉 Done updating SCSS image paths!");
