#!/bin/bash

# Target directory is the parent of the script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
cd "$DIR"

echo "Starting shell auto-commit watcher for: $DIR"

# Wait 5 seconds to let initial commands settle
sleep 5

while true; do
  # Check if there are any changes (modified, untracked, deleted)
  # Exclude package-lock.json if needed, but since git status --porcelain shows everything, we check it
  CHANGES=$(git status --porcelain)
  
  if [ -n "$CHANGES" ]; then
    echo "------------------------------------------------"
    echo "Changes detected:"
    echo "$CHANGES"
    echo "Syncing with GitHub..."
    git add .
    git commit -m "Auto-sync: saved changes"
    git push origin main
    echo "Sync complete and pushed to GitHub!"
    echo "------------------------------------------------"
  fi
  
  # Wait 5 seconds before checking again
  sleep 5
done
