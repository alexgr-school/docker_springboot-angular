#!/bin/bash

# Chemin vers le dossier environments
ENV_DIR="/app/src/environments"

# Chemin complet vers le fichier environment.ts
ENV_FILE="$ENV_DIR/environment.ts"

# Créer le dossier environments s'il n'existe pas
mkdir -p $ENV_DIR

# Créer ou écraser le fichier environment.ts
cat <<EOF > $ENV_FILE
export const environment = {
  production: false,
EOF

# Ajouter les variables d'environnement au fichier
if [ -n "$BACK_URL" ]; then
  echo "  BACK_URL: '$BACK_URL'," >> $ENV_FILE
fi

# Terminer le fichier
echo "};" >> $ENV_FILE
