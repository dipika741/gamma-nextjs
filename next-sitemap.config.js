/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "http://localhost:3000", // Use your local dev URL here
    generateRobotsTxt: true,
    changefreq: "weekly",
    priority: 0.7,
    sitemapSize: 7000,
    exclude: ["/server-sitemap.xml"],
};
