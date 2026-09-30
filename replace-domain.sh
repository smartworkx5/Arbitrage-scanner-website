#!/bin/sh
# Usage: sh replace-domain.sh https://your-real-domain.com
# Replaces the placeholder domain in every page, the sitemap and robots.txt.
[ -z "$1" ] && echo "Usage: sh replace-domain.sh https://yourdomain.com" && exit 1
D="${1%/}"
HOST=$(echo "$D" | sed 's#https\?://##')
find . -type f \( -name '*.html' -o -name '*.xml' -o -name '*.txt' \) -exec sed -i "s#https://YOUR-DOMAIN.com#$D#g; s#YOUR-DOMAIN.com#$HOST#g" {} +
echo "Done. Domain set to $D"
