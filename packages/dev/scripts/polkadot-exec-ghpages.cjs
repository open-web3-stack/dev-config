#!/usr/bin/env node
// Copyright 2017-2020 @polkadot/dev authors & contributors
// SPDX-License-Identifier: Apache-2.0

const { importRelative } = require('./import.cjs');

importRelative(
  'gh-pages',
  'gh-pages/bin/gh-pages.js'
)(process.argv)
  .then(() => {
    process.stdout.write('Published\n');
    process.exit(0);
  })
  .catch(() => process.exit(1));
