# Qatamin Cosmetics — website

Static site (HTML/CSS/JS, no build step). Checkout hands off to the existing
Shopify store at qatamincosmetics.com.

## Preview mode
While the owner has not approved the site, it is hidden from search engines by:
- the `<meta name="robots" content="noindex, nofollow">` line in `index.html`
- `robots.txt`

To go fully public: delete both, commit and push.

## Deploy (GitHub Pages)
Repository → Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / `(root)` → Save.
The site appears at `https://<your-username>.github.io/<repo-name>/` within a minute or two.
