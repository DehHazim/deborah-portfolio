# Portfolio Deborah Bello

Portfolio estatico feito com HTML, CSS e JavaScript, pronto para publicacao no GitHub Pages.

## Estrutura

- `index.html`: estrutura principal da pagina
- `styles.css`: estilos e layout responsivo
- `script.js`: animacoes de revelacao ao rolar a pagina
- `.github/workflows/deploy.yml`: publicacao automatica no GitHub Pages

## Como visualizar localmente

1. Abra `index.html` no navegador.
2. Se preferir servir localmente por HTTP, rode:

```bash
npm start
```

## Publicacao no GitHub Pages

1. Crie um repositorio no GitHub e envie estes arquivos.
2. Se quiser a URL mais simples possivel, renomeie o repositorio para `dehhazim.github.io`.
3. Se mantiver o nome `portfolio-deborah`, a URL ficara neste formato:

```text
https://dehhazim.github.io/portfolio-deborah/
```

4. No GitHub, va em `Settings > Pages` e confirme que a fonte de deploy esta como `GitHub Actions`.
5. A cada push na branch principal, o site sera publicado automaticamente.

## Observacoes

- GitHub Pages publica apenas arquivos estaticos. Por isso, o backend anterior nao e mais necessario.
- Nao suba arquivos `.env` nem chaves reais para repositorios publicos.
