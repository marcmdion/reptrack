#!/usr/bin/env bash
# Restrict the Firebase browser API key to approved HTTP referrers.
# Requires: gcloud CLI authenticated to the md-reptrack Google Cloud project.
#
# Usage:
#   chmod +x scripts/restrict-firebase-api-key.sh
#   ./scripts/restrict-firebase-api-key.sh
#
# Or apply the same settings manually in Google Cloud Console:
# APIs & Services → Credentials → Browser key (auto created by Firebase)
# → Application restrictions: HTTP referrers
# → Add the referrers listed in REFERRERS below
# → API restrictions: Restrict key → Identity Toolkit API, Cloud Firestore API,
#   Firebase Installations API, Secure Token Service API

set -euo pipefail

PROJECT_ID="md-reptrack"
API_KEY_ID="" # Set to your Browser API key resource ID from Cloud Console (not the key string).

REFERRERS=(
  "https://md-reptrack.firebaseapp.com/*"
  "https://md-reptrack.web.app/*"
  "https://marcmdion.github.io/reptrack/*"
  "http://localhost/*"
  "http://127.0.0.1/*"
)

APIS=(
  "identitytoolkit.googleapis.com"
  "firestore.googleapis.com"
  "firebaseinstallations.googleapis.com"
  "securetoken.googleapis.com"
)

if [[ -z "${API_KEY_ID}" ]]; then
  echo "Set API_KEY_ID in this script to your Browser key ID from:"
  echo "https://console.cloud.google.com/apis/credentials?project=${PROJECT_ID}"
  echo ""
  echo "Add these HTTP referrers:"
  printf '  %s\n' "${REFERRERS[@]}"
  exit 1
fi

REFERRER_FLAGS=()
for ref in "${REFERRERS[@]}"; do
  REFERRER_FLAGS+=(--allowed-referrers="$ref")
done

API_FLAGS=()
for api in "${APIS[@]}"; do
  API_FLAGS+=(--api-target=service="$api")
done

gcloud alpha services api-keys update "$API_KEY_ID" \
  --project="$PROJECT_ID" \
  "${REFERRER_FLAGS[@]}" \
  "${API_FLAGS[@]}"

echo "API key restrictions updated for project ${PROJECT_ID}."
