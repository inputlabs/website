# Input Labs website

*Website published at [inputlabs.io](https://inputlabs.io)*

## Contributions
- **Accessibility database:** If you want to contribute, the videogame entries for the accessibility database are located at [src/pub/db](./src/pug/db).
- **Alpakka manual:** If you want to contribute, the manual files are located at [src/pug/alpakka/manual](./src/pug/alpakka/manual).

## Dependencies

- [NodeJS](https://nodejs.org)
- `npm ci`

## Commands

- `npm run dev` - To dynamically render pages while developing.
- `npm run dev_strict` - To develop with a more faithful but slower rendering (build & serve).
- `npm run build` - To consolidate into HTML and static files.
- `npm run build_prod` - To consolidate into HTML and static files, for production.
- `npm run serve` - To serve the consolidated version locally.
