// src/utils/slugify.js


// const slugify = (text) =>
//     text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// export default slugify;

const slugify = (text) => {
    if (!text || typeof text !== "string") return "";
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
};

export default slugify;



