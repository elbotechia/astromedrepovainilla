# astromedrepovainilla

## Deploy no GitHub Pages (subpasta do repositório)

Este projeto está configurado para publicar automaticamente no GitHub Pages pela branch `main`, com build Vite e deploy por GitHub Actions.
Como o repositório não é do tipo `usuario.github.io`, a base do Vite está em `base: '/astromedrepovainilla/'`.

### Arquivos adicionados

- `.github/workflows/deploy-pages.yml`: pipeline de build e deploy.
- `vite.config.js`: define `base: '/astromedrepovainilla/'` para servir na subpasta correta.

### Como ativar no GitHub

1. Faça push para a branch `main`.
2. No repositório, abra **Settings > Pages**.
3. Em **Build and deployment**, escolha **Source: GitHub Actions**.
4. Aguarde o workflow **Deploy to GitHub Pages** concluir.

### Scripts

- `npm run dev`: ambiente local.
- `npm run build`: build de produção.
- `npm run build:pages`: build usado no workflow.

