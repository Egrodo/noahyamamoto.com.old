module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true
  },
  plugins: [
    "babel"
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    "babel/semi": 0,
    'no-use-before-define': 0,
    "no-console": 0,
  }
};
