module.exports = {
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  globals: { fetch: false },
  rules: {
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { aspects: ["invalidHref"] }]
  }
};
