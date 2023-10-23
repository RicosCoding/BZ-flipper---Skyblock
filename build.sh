#!/bin/sh
set -eu
cd "$(dirname "$0")" || exit 1
rm -rf bzflipper
mkdir bzflipper
npx rollup -c > bzflipper/bzflipper.js
cp -r src/ bzflipper/src/
cp index.js bzflipper/index.js
cp metadata.json bzflipper/metadata.json
cp data/data.json bzflipper/data.json
7z a bzflipper.zip bzflipper
if [ -f apikey.txt ]; then cp apikey.txt bzflipper/apikey.txt; fi