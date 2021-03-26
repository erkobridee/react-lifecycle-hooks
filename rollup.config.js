/*
  https://rollupjs.org/
  https://devhints.io/rollup
*/

import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';

//----------------------------------------------------------------------------//

import pkg from './package.json';

//----------------------------------------------------------------------------//

const getDeps = (deps = {}) => Object.keys(deps);

const external = [
  ...getDeps(pkg.peerDependencies),
  ...getDeps(pkg.dependencies),
];

//----------------------------------------------------------------------------//

const defaultBuildConfig = {
  outputDir: 'dist-pack',
  bundleDir: 'dist',
  bundleEntry: 'src/index.ts',
};

const { outputDir, bundleDir, bundleEntry } = {
  ...defaultBuildConfig,
  ...(pkg.buildConfig || {}),
};

//----------------------------------------------------------------------------//

const tsPluginConfig = {
  clean: true,
  rollupCommonJSResolveHack: true,
  useTsconfigDeclarationDir: true,
  tsconfigOverride: {
    compilerOptions: {
      declaration: true,
      declarationDir: `${outputDir}`,
      sourceMap: true,
    },
    exclude: [
      './src/**/*.spec.ts',
      './src/**/*.spec.tsx',
      './src/**/*.stories.tsx',
      './src/__mocks__',
    ],
  },
};

const babelConfig = {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  babelHelpers: 'runtime',
  exclude: 'node_modules/**',
};

const rollupCommonPlugins = [
  typescript(tsPluginConfig),
  babel(babelConfig),
  resolve(),
  commonjs(),
  json(),
];

//----------------------------------------------------------------------------//

const bundleConfig = {
  input: bundleEntry,
  output: [
    {
      file: `${outputDir}/${bundleDir}/esm.js`,
      format: 'esm',
    },
    {
      file: `${outputDir}/${bundleDir}/cjs.js`,
      format: 'cjs',
      exports: 'named',
    },
  ],
  plugins: rollupCommonPlugins,
  external,
};

export default bundleConfig;
