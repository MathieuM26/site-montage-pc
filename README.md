# M26 INFORMATIQUE — Site vitrine

Site web de **M26 INFORMATIQUE**, service de montage PC sur mesure et de
configurations gaming pré-montées, basé à Mouscron (Belgique).

🌐 **Site en ligne :** https://mathieum26.github.io/site-montage-pc/

## Le site

Une page unique présentant :

- Trois configurations pré-montées : **Starter**, **Apex** et **Titan**
- L'offre de **montage** (assemblage de vos propres composants) à 100 €
- Le processus, la FAQ et les coordonnées

Les boutons « Commander cette config » et « Réserver mon montage » ouvrent un
email **pré-rempli** (config choisie, composants, coordonnées) à destination de
**m26.informatique@gmail.com**.

## Comment ça marche

Le site publié est un simple fichier statique : [`site/index.html`](site/index.html)
(HTML + CSS, sans framework), avec l'image [`site/hero-pc.jpg`](site/hero-pc.jpg).

À chaque `git push` sur la branche `main`, un workflow **GitHub Actions**
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) publie
automatiquement le dossier `site/` sur **GitHub Pages**.

## Modifier le site

1. Éditer [`site/index.html`](site/index.html) (textes, prix, composants…)
2. Enregistrer, puis :
   ```bash
   git add -A
   git commit -m "Description du changement"
   git push
   ```
3. Le site se republie tout seul en ~1 minute.

> Pour changer l'image hero : remplacer `site/hero-pc.jpg` et incrémenter le
> numéro de version dans le HTML (`hero-pc.jpg?v=4` → `?v=5`) pour forcer le
> rechargement (contournement du cache navigateur).

## À propos du dossier `src/`

Le dépôt contient aussi le code source d'origine (export Lovable / TanStack
Start dans `src/`). Il **n'est pas utilisé** pour le site publié — seul le
dossier `site/` est mis en ligne. Il est conservé à titre de référence.

## Contact

**M26 INFORMATIQUE** · Mouscron, Belgique
📧 m26.informatique@gmail.com · 📞 0478 46 61 96 · 🕙 Lun–Ven 10h–18h
