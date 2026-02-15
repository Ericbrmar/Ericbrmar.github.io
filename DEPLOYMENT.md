# Deploying to GitHub Pages

This guide explains how to deploy your Eric Brooks Martin portfolio to GitHub Pages.

## Prerequisites
- A GitHub account
- Git installed locally (if deploying manually)

## Option 1: Deploy via Lovable's GitHub Integration (Recommended)

1. In the Lovable editor, click the **project name** (top left) → **Settings** → **GitHub**
2. Click **Connect project** and authorize the Lovable GitHub App
3. Select your GitHub account and click **Create Repository**
4. Your code is now on GitHub with automatic two-way sync

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. Create the file `.github/workflows/deploy.yml` in your repo with the content below:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build
        env:
          BASE_URL: /${{ github.event.repository.name }}/

      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

5. Update `vite.config.ts` to set the base path for GitHub Pages:

```ts
export default defineConfig({
  base: process.env.BASE_URL || '/',
  // ... rest of config
})
```

6. Push the changes — GitHub Actions will automatically build and deploy your site.
7. Your site will be live at: `https://<your-username>.github.io/<repo-name>/`

## Option 2: Custom Domain (Optional)

1. In your GitHub repo, go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `ericbrooksmartin.com`)
3. Add a `CNAME` file to your repo's root containing your domain name
4. Configure DNS with your domain registrar:
   - For apex domain: Add `A` records pointing to GitHub's IPs
   - For subdomain: Add a `CNAME` record pointing to `<username>.github.io`

## Troubleshooting

- **Blank page?** Make sure `base` in `vite.config.ts` matches your repo name
- **404 on refresh?** Add a `public/404.html` that redirects to `index.html` for SPA routing
- **Build fails?** Check the Actions tab in GitHub for error logs
