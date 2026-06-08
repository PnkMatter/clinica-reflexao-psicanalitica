# Clínica Reflexão Psicanalítica

Landing page para a Clínica Reflexão Psicanalítica — psicanálise em Sorocaba, SP.

Design original no [Figma](https://www.figma.com/design/7ILo6a8GAi4OoR02LP1SFM/Landing-Page-for-Cl%C3%ADnica-Reflex%C3%A3o-Psicanal%C3%ADtica).

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview   # pré-visualizar o build localmente
```

## Deploy no GitHub Pages

### Opção 1 — gh-pages (automático)

```bash
npm run deploy
```

Isso executa `vite build` e publica a pasta `dist/` no branch `gh-pages`.

Depois, vá em **Settings → Pages** do repositório e selecione:
- **Source:** Deploy from a branch
- **Branch:** `gh-pages` / `/ (root)`

### Opção 2 — GitHub Actions (CI/CD)

Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

Depois, vá em **Settings → Pages** e selecione **Source: GitHub Actions**.

## Tecnologias

- React 18
- Vite 6
- Tailwind CSS 4
- Framer Motion
- Lucide Icons