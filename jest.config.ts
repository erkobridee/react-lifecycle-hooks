/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  moduleNameMapper: {
    '\\.(css|less|scss|sass|styl)$': 'identity-obj-proxy',
    '^.+\\.svg$': `<rootDir>/src/__mocks__/svgrMock.js`,
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/src/__mocks__/fileMock.js`,
  },

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'html'],

  transform: {
    '^.+\\.([tj]sx?|html)$': 'ts-jest',
  },

  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.json' } },

  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.ts',
    '!.eslintrc.js',
    '!jest.config.ts',
    '!**/{jest,next,tailwind}.config.js',
    '!**/*.stories.{ts,tsx}',
    '!**/src/{polyfills,main}.{ts,tsx}',
    '!**/src/environments/**',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/public/**',
    '!**/types/**',
  ],
  coverageReporters: [/*'cobertura',*/ 'clover', 'html' /*, 'lcovonly'*/],
  /*reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: '<rootDir>/reports/junit',
        outputName: 'test-report.xml',
      },
    ],
  ],*/
};
