// Copyright 2017-2020 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@open-web3/dev-config/config/jest.cjs');

module.exports = Object.assign({}, config, {
  modulePathIgnorePatterns: ['<rootDir>/packages/dev/build'],
  resolver: '@open-web3/dev-config/config/jest-resolver.cjs'
});
