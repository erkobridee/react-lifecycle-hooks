const path = require('path');
const fse = require('fs-extra');

const removeAttributes = (fromObject, attributes) => {
  if (!fromObject || !Array.isArray(attributes) || attributes.length <= 0) {
    return fromObject;
  }
  return Object.entries(fromObject)
    .filter((entry) => !attributes.includes(entry[0]))
    .reduce((acc, entry) => ({ ...acc, [entry[0]]: entry[1] }), {});
};

const packageNotAllowedAttributes = [
  'main',
  'module',
  'browser',
  'types',
  'files',
  'buildConfig',
  'packageFilesMap',
  'scripts',
  'devDependencies',
  'lint-staged',
  'husky',
];

const rootPackageJsonPath = path.resolve('package.json');

let pkg = require(rootPackageJsonPath);

const packFiles = pkg.packageFilesMap;

pkg = removeAttributes(pkg, packageNotAllowedAttributes);

pkg = {
  ...packFiles,
  ...pkg,
};

pkg = JSON.stringify(pkg, null, 2);

(async () => {
  try {
    await fse.outputFile('dist-pack/package.json', pkg);
  } catch (e) {
    console.error(e);
  }
})();
