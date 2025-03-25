module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      parserOptions: {
        requireConfigFile: false,
      },
    },
  ],
  parserOpts: {
    plugins: ["jsx"]
  }
};