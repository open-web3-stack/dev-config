#!/usr/bin/env node
// Copyright 2017-2020 @polkadot/dev authors & contributors
// SPDX-License-Identifier: Apache-2.0

const { importRelative } = require('./import.cjs');

importRelative('eslint', 'eslint/bin/eslint.js');
