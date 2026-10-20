# ILyas Network Tools 🌐

A free, bilingual (English/Arabic), dark-mode networking toolkit for IT students and beginners. Built with plain HTML, CSS, and JavaScript — no backend, framework, build step, or account required.

## Live demo

After enabling GitHub Pages, your site should be available at:

`https://ILyasZobair.github.io/ilyas-network-tools/`

> GitHub Pages URLs are case-insensitive for the username, but the repository path must match your actual repository name.

## Features

- **IPv4 Subnet Calculator** — network address, broadcast address, subnet mask, wildcard mask, host range, total addresses, and usable host count for CIDR prefixes `/0` through `/32`.
- **Troubleshooting Guide** — practical Windows and Linux diagnostic steps for no internet, DNS, Wi-Fi, and slow connection symptoms.
- **Networking Quiz** — 8 beginner questions, immediate feedback, explanations, and score tracking.
- **Bilingual UI** — switch between English and Arabic with RTL layout support.
- **Responsive dark design** — works on desktop and mobile.
- **Privacy-friendly** — calculator and quiz run locally in your browser. No form data is sent to a server.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.

No dependencies or build commands are needed. Google Fonts are loaded from an external service; system fallback fonts are used if they are unavailable.

## Deploy to GitHub Pages

1. Create a public repository named `ilyas-network-tools` in your GitHub account.
2. Upload `index.html`, `styles.css`, `app.js`, and the `assets/` folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then click **Save**.
6. Wait for the deployment to finish. Open the URL shown in Settings → Pages.

If you use a different repository name, your published URL will use that name instead.

## Project structure

```text
ilyas-network-tools/
├── index.html
├── styles.css
├── app.js
├── README.md
└── assets/
    └── favicon.svg
```

## Technical notes

- The subnet calculator validates IPv4 octets and handles `/0`–`/32`, including the special `/31` and `/32` host-count cases.
- Network checks are instructions only: a static website cannot run `ping`, `tracert`, `ipconfig`, or Linux commands on a visitor's device.
- Troubleshooting advice is educational. Firewalls and network policies may affect diagnostic results.
- This is a learning tool, not a replacement for production network planning or security review.

## Contributing

Issues and pull requests are welcome. Suggestions for new calculators, translations, quiz questions, and troubleshooting scenarios are useful.

## License

MIT — see [LICENSE](LICENSE).
