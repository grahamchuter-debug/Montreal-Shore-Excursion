#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
if [[ ! -f node_modules/.bin/wrangler ]]; then npm install; fi
echo "Building Montréal Shore Excursions..."
npm run build
echo "Deploying to Cloudflare..."
npx wrangler deploy
echo ""
echo "Done. If montrealshoreexcursion.com still shows 404:"
echo "  Workers & Pages → montreal-shore-excursion → Settings → Domains"
echo "  → Add montrealshoreexcursion.com and www.montrealshoreexcursion.com"
