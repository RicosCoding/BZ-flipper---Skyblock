#!/bin/sh
set -eu
cd "$(dirname "$0")" || exit 1
rm -rf NotEnoughUpdates-REPO
git clone --depth=1 https://github.com/Moulberry/NotEnoughUpdates-REPO.git
npx ts-node-transpile-only generate.ts