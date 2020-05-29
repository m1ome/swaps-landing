#!/usr/bin/env sh

# abort on errors
set -e

# build
export NODE_ENV=production
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'swaps.app' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:m1ome/swaps-landing.git master:gh-pages

cd -