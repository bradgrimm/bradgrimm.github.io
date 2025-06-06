import os
import csv
import argparse
import requests
from base64 import b64encode

SPOTIFY_SEARCH_URL = "https://api.spotify.com/v1/search"
SPOTIFY_AUDIO_FEATURE_URL = "https://api.spotify.com/v1/audio-features/{id}"


def get_token() -> str:
    """Retrieve an OAuth token using client credentials."""
    client_id = os.getenv("SPOTIFY_CLIENT_ID")
    client_secret = os.getenv("SPOTIFY_CLIENT_SECRET")
    if not client_id or not client_secret:
        raise RuntimeError(
            "SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET environment variables must be set."
        )

    auth_header = b64encode(f"{client_id}:{client_secret}".encode()).decode()

    response = requests.post(
        "https://accounts.spotify.com/api/token",
        headers={"Authorization": f"Basic {auth_header}"},
        data={"grant_type": "client_credentials"},
    )
    response.raise_for_status()
    return response.json()["access_token"]


def search_track(title: str, artist: str, token: str):
    """Search for a track on Spotify and return the first result's ID."""
    headers = {"Authorization": f"Bearer {token}"}
    params = {
        "q": f"track:{title} artist:{artist}",
        "type": "track",
        "limit": 1,
    }
    response = requests.get(SPOTIFY_SEARCH_URL, headers=headers, params=params)
    response.raise_for_status()
    data = response.json()
    items = data.get("tracks", {}).get("items", [])
    if not items:
        return None
    return items[0]["id"]


def fetch_audio_features(track_id: str, token: str) -> dict:
    headers = {"Authorization": f"Bearer {token}"}
    url = SPOTIFY_AUDIO_FEATURE_URL.format(id=track_id)
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    return response.json()


def enrich_row(row: dict, token: str) -> dict:
    title = row.get("Song") or row.get("Title") or row.get("song") or row.get("title")
    artist = row.get("Artist") or row.get("artist")
    if not title or not artist:
        return row
    try:
        track_id = search_track(title, artist, token)
        if not track_id:
            row.update({
                "BPM": "",
                "Duration": "",
                "Key": "",
                "Guitar Tuning": "",
                "Style": "",
            })
            return row
        features = fetch_audio_features(track_id, token)
        row.update({
            "BPM": features.get("tempo"),
            "Duration": round(features.get("duration_ms", 0) / 1000),
            "Key": features.get("key"),
            "Guitar Tuning": "Standard",
            "Style": "Major" if features.get("mode") == 1 else "Minor",
        })
    except Exception as exc:
        row.update({
            "BPM": "",
            "Duration": "",
            "Key": "",
            "Guitar Tuning": "",
            "Style": "",
        })
    return row


def main():
    parser = argparse.ArgumentParser(description="Enrich a setlist CSV with Spotify info")
    parser.add_argument("input_csv", help="Path to input CSV file")
    parser.add_argument("output_csv", help="Path to output CSV file")
    args = parser.parse_args()

    token = get_token()

    with open(args.input_csv, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        fieldnames = reader.fieldnames or []

    extra_fields = ["BPM", "Duration", "Key", "Guitar Tuning", "Style"]
    for fld in extra_fields:
        if fld not in fieldnames:
            fieldnames.append(fld)

    enriched = [enrich_row(row, token) for row in rows]

    with open(args.output_csv, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(enriched)

    print(f"Wrote enriched CSV to {args.output_csv}")


if __name__ == "__main__":
    main()
