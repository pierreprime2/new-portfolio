import os
import requests

# List of technology slugs as expected by Simple Icons
tech_logos = [
    "php",
    "javascript",
    "mysql",
    "mongodb",
    "docker",
    "kubernetes",
    "symfony",
    "laravel",
    "linux",
    "react",
    "nextdotjs"
]

# Output directory
output_dir = "assets/logos"
os.makedirs(output_dir, exist_ok=True)

# Base URL
base_url = "https://cdn.simpleicons.org/"

for tech in tech_logos:
    url = f"{base_url}{tech}"
    filename = os.path.join(output_dir, f"{tech}.svg")
    
    try:
        response = requests.get(url)
        response.raise_for_status()
        with open(filename, "wb") as f:
            f.write(response.content)
        print(f"✅ Downloaded: {filename}")
    except requests.exceptions.HTTPError as e:
        print(f"❌ Failed for {tech}: {e}")
