![https://img.shields.io/github/v/release/damonhook/warcry-statshammer.svg](https://img.shields.io/github/v/release/damonhook/warcry-statshammer.svg)

<div align="center">
    <a href="https://warcry-statshammer.herokuapp.com/" target="_blank">
        <img width="128" src="docs/logo256.png">
    </a>
</div>

# Warcry Statshammer

A tool for calculating and comparing damage outputs for Warhammer Warcry Fighters
(also referred to as Mathhammer).

The production deploy of the tool is located at: https://warcry-statshammer.herokuapp.com/

## Installation

Ensure that you have `node`, `yarn`, and `nodedeamon` installed.

Install the packages needed for the express server (backend) and the client (frontend)

```bash
yarn setup
```

## Usage

### `yarn dev`

Runs the app in development mode (launches both the express server, and the react frontend).

Open http://localhost:3000 to view it in the browser

### `yarn test`

Runs the api tests. Please make sure you run this whenever you make any changes to the api / backend

### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

