#!/bin/bash
#
# Create all files for a new cata
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

kataName=$1

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

generateDocs() {
  cat > docs/$kataName.md <<- EOF
# $kataName

<!-- Description Here -->

## Install

\`\`\`
$ npm install @abranhe/codewars
\`\`\`

## Usage

\`\`\`js
const codewars = require('@abranhe/codewars');

codewars.$kataName('unicorns');
//=> 'unicorns'
\`\`\`

## API

### codewars.$kataName(input, [options])

#### input

Type: \`string\`

Lorem ipsum.

#### options

Type: \`object\`

##### foo

Type: \`boolean\`<br>
Default: \`false\`

Lorem ipsum.<% if (cli) { %>
EOF
}

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

generateSrc() {
  cat > src/$kataName.js <<- EOF
// Do not forget to add it to the index.js
module.exports = input => {
	return input;
};
EOF
}

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

generateTest() {
  cat > tests/$kataName.test.js <<- EOF
import test from 'ava';
import { $kataName } from '../src';

test('Check $kataName.js', t => {
    t.is($kataName('4556364607935616'), '############5616');
});
EOF
}

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

main() {
    generateDocs
    generateTest
    generateSrc
    printf "\033[32m'${kataName}'\033[0m was created successfully!\n"
}

main "${@%/}"
