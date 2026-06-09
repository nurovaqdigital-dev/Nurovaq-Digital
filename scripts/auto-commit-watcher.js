const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const WATCH_DIR = path.resolve(__dirname, '..');
const DEBOUNCE_MS = 5000; // Wait 5 seconds after last change before committing
let timeoutId = null;
let isSyncing = false;

console.log(`Starting auto-commit watcher for: ${WATCH_DIR}`);

function runGitSync() {
  if (isSyncing) {
    // If a sync is already running, defer the next check
    timeoutId = setTimeout(runGitSync, DEBOUNCE_MS);
    return;
  }

  isSyncing = true;
  console.log('Changes detected. Syncing with GitHub...');
  
  // First check if there are any changes (modified, untracked, deleted)
  exec('git status --porcelain', (statusErr, statusStdout) => {
    if (statusErr) {
      console.error(`Error checking git status: ${statusErr.message}`);
      isSyncing = false;
      return;
    }

    if (!statusStdout.trim()) {
      console.log('No local changes to sync.');
      isSyncing = false;
      return;
    }

    // Run git add, commit, and push
    exec('git add . && git commit -m "Auto-sync: saved changes" && git push origin main', (error, stdout, stderr) => {
      isSyncing = false;
      if (error) {
        console.error(`Error during sync: ${error.message}`);
        console.error(stderr);
        return;
      }
      console.log('Sync complete and pushed to GitHub!');
      if (stdout) console.log(stdout);
    });
  });
}

function watchDirectory(dir) {
  // fs.watch recursive works on macOS and Windows, perfect for our mac environment
  fs.watch(dir, { recursive: true }, (eventType, filename) => {
    if (!filename) return;

    // Normalize path separators
    const normalizedPath = filename.replace(/\\/g, '/');

    // Ignore .git, node_modules, .next, and the script itself
    if (
      normalizedPath.includes('.git/') ||
      normalizedPath.startsWith('.git') ||
      normalizedPath.includes('node_modules/') ||
      normalizedPath.startsWith('node_modules') ||
      normalizedPath.includes('.next/') ||
      normalizedPath.startsWith('.next') ||
      normalizedPath.includes('auto-commit-watcher.js') ||
      normalizedPath.includes('package-lock.json')
    ) {
      return;
    }

    console.log(`File changed: ${filename} (${eventType})`);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      runGitSync();
    }, DEBOUNCE_MS);
  });
}

// Run initial sync check in case there are unstaged changes
runGitSync();

watchDirectory(WATCH_DIR);
