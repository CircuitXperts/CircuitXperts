
/**
 * This file is for advanced configuration of the Next.js framework.
 * The below config applies to the whole application.
 *
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  output: "export",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    // See https://nextjs.org/docs/api-reference/next/image#unoptimized
    unoptimized: true,
  },
  // See https://nextjs.org/docs/api-reference/next.config.js/exportPathMap#adding-a-trailing-slash
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    // Fixes npm packages (mdx) that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.resolve.alias.handlebars = "handlebars/dist/handlebars.js";

    return config;
  },
  compiler: {
    styledComponents: true,
  },
  // See https://nextjs.org/docs/api-reference/next.config.js/disabling-x-powered-by
  poweredByHeader: false,
  // See https://nextjs.org/docs/advanced-features/compiler#module-transpilation
});
