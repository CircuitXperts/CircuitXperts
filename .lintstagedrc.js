const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "**/*.ts?(x)": () => "npx tsc --noEmit",
  "*.{js,jsx,ts,tsx,md,mdx,css,scss,json}": "npx prettier --write",
  "*.{css,scss}": "stylelint --config .stylelintrc-css.json --fix",
  "*.{js,ts,tsx}": "stylelint",
};
