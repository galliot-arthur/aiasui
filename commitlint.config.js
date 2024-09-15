const pattern = /^(\w*)(\((?:AIASUI)-\d+(?:,\s?(?:AIASUI)-\d+)*\))?:\s(.*)$/;

module.exports = {
  extends: ["@commitlint/config-conventional", "@commitlint/parse"],
  parserPreset: {
    parserOpts: {
      headerPattern: pattern,
      headerCorrespondence: ["type", "scope", "subject"],
    },
  },
  rules: {
    "header-pattern": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "header-pattern": (parsed) => {
          const { type, scope, subject } = parsed;
          if (type === null && scope === null && subject === null) {
            return [false, `header must respect this pattern: '${pattern}'`];
          }

          return [true, ""];
        },
      },
    },
  ],
};
