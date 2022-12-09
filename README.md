# 11ty-stylo

Carnet web propulsé par Eleventy, et des données hébergées sur Stylo

![](./screenshot.png)

## Installer

```
npm install
```

## Configurer

1. Copier le fichier `.env.example` en `.env`
2. Ajouter la clé d'API de votre compte Stylo

## Démarrer

```
npm start
```

## Déployer

Le déploiement est **semi-automatisé**. C'est-à-dire que le site se déploie _tout seul_,
sur un **changement de code source** ou en appuyant sur un **bouton**.

_Pas encore_ quand un contenu est modifié.

### GitHub Pages

Voir [`.github/workflows/pages.yml`](.github/workflows/pages.yml).\
Publié sur [`thom4parisot.github.io/11ty-stylo/`](https://thom4parisot.github.io/11ty-stylo/).

### GitLab Pages

Voir [`.gitlab-ci.yml`](.gitlab-ci.yml).\
Publié sur [`thom4parisot.frama.io/11ty-stylo/`](https://thom4parisot.frama.io/11ty-stylo/).

### Netlify

Voir [`netlify.toml`](netlify.toml).\
Publié sur [`11ty-stylo-template.netlify.app`](https://11ty-stylo-template.netlify.app/).
