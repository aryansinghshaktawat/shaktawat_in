/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://shaktawat.in",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  additionalPaths: async (config) => [
    await config.transform(config, "/", {
      changefreq: "daily",
      priority: 1.0,
    }),
    await config.transform(config, "/blog", {
      changefreq: "weekly",
      priority: 0.8,
    }),
    await config.transform(config, "/profile", {
      changefreq: "monthly",
      priority: 0.9,
    }),
    await config.transform(config, "/projects", {
      changefreq: "weekly", 
      priority: 0.8,
    }),
    await config.transform(config, "/experience", {
      changefreq: "monthly",
      priority: 0.7,
    }),
    await config.transform(config, "/skills", {
      changefreq: "monthly",
      priority: 0.7,
    }),
    await config.transform(config, "/contact", {
      changefreq: "monthly",
      priority: 0.6,
    }),
    await config.transform(config, "/resume", {
      changefreq: "monthly",
      priority: 0.6,
    }),
  ],
};
