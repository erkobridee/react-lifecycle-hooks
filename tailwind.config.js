module.exports = {
  purge: ['./src/**/*!(spec).{jsx,tsx}'],
  variants: {
    extend: {
      padding: ['hover'],
    },
  },
};
