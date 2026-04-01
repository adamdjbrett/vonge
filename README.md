# Vonge Eleventy Port
![](screenshot.png)

This repository is an Eleventy port of the original Vonge design.

Original template credit:
- CloudCannon Vonge Hugo Bookshop template: https://github.com/CloudCannon/vonge-hugo-bookshop-template
- Prior Zola adaptation by Pascal Berrang: https://github.com/paberr/vonge-zola-theme

## Current stack

- Eleventy + Nunjucks
- Sass build pipeline
- Pagefind search indexing
- Feed, sitemap, robots, and humans outputs

## Repository structure

This repo is organized to mirror the Eleventy-first layout used by `eleventy-base-blog`:

- `content/` page, blog, project, tag, and feed templates/content
- `_includes/` layouts and partials
- `_data/` global site data
- `static/` passthrough assets
- `sass/` source styles
- `scripts/` local build scripts

Removed from the repo structure:

- legacy `site/` input folder
- legacy `templates/` folder
- legacy Zola config files (`config.toml`, `theme.toml`)

## Development

```bash
npm install
npm run start
```

## Production build

```bash
npm run build
```

## License

MIT. See [LICENSE](LICENSE).
