# SkillHub

Plateforme web de mise en relation entre apprenants et formateurs.

## Stack technique

- Front : React + Vite
- Back : Node.js + Express
- Base de données : PostgreSQL
- Conteneurisation : Docker + Docker Compose
- CI/CD : GitHub Actions + GitHub Container Registry

## Lancement en développement local

Copiez le fichier .env.dist en .env et renseignez les valeurs :

    cp .env.dist .env

Lancez les services :

    docker compose up --build

L'application est accessible sur http://localhost:8080.

## Lancement des tests
Back :

    cd back && npm test

Front :

    cd front && npm test

## Déploiement manuel

    chmod +x deploy.sh
    ./deploy.sh

## Pipeline CI/CD

Le pipeline GitHub Actions se déclenche automatiquement sur chaque push ou pull request vers
dev ou main.

- Push vers dev : lint, tests, build et push des images sur ghcr.io
- Push vers main : lint, tests, build, push des images et déploiement sur le serveur