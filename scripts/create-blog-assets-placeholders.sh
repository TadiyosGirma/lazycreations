#!/bin/sh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")"/.. && pwd)"
CONTENT_DIR="$ROOT_DIR/content/blog"
PUBLIC_DIR="$ROOT_DIR/public/blog-assets"

mkdir -p "$PUBLIC_DIR"

for file in "$CONTENT_DIR"/*.mdx; do
  slug="$(basename "$file" .mdx)"
  target_dir="$PUBLIC_DIR/$slug"
  mkdir -p "$target_dir"
  if [ ! -f "$target_dir/hero.jpg" ] && [ ! -f "$target_dir/hero.png" ] && [ ! -f "$target_dir/hero.svg" ]; then
    cp "$PUBLIC_DIR/placeholder.svg" "$target_dir/hero.svg"
  fi
done

echo "Created placeholder hero images for missing blog assets."


