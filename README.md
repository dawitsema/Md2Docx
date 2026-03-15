# Evim - MD2DOCX

**Premium Markdown to Word Document Converter**

A fast, beautiful, deployable web app for converting `.md` files to `.docx` with live preview.

---

## 🚀 Quick Start (Local)

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Deploying to GitHub + Vercel

### Step 1 — Push to GitHub

1. Create a new repo on [github.com/new](https://github.com/new). Make it **public or private**.

2. In your project folder, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

### Step 2 — Deploy to Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **"Add New → Project"**.
3. Select your `MdToDocx` repository.
4. Vercel auto-detects Next.js. Click **"Deploy"**.
5. ✅ Done! Your app is live at `https://your-project.vercel.app`.

> **Auto-deploy**: Every time you `git push`, Vercel redeploys automatically.

---

### Step 3 — Deploy to Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
2. Click **"Add new site → Import an existing project"**.
3. Select **GitHub**, then pick your repository.
4. Set build command: `npm run build`
5. Set publish directory: `.next`
6. Click **"Deploy site"**.

> **Note**: Netlify requires the [`@netlify/plugin-nextjs`](https://github.com/netlify/netlify-plugin-nextjs) plugin for proper Next.js support. Add a `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 🌐 Custom Domain

- **Vercel**: Project → Settings → Domains → Add your domain
- **Netlify**: Site overview → Domain settings → Add custom domain

Both provide free HTTPS automatically.

---

## 🏗 Tech Stack

| Layer        | Technology                     |
|:-------------|:-------------------------------|
| Framework    | Next.js 16 (App Router)        |
| UI           | Tailwind CSS v4                |
| Editor       | Monaco Editor                  |
| Markdown     | react-markdown, remark-gfm     |
| DOCX         | html-to-docx, marked           |
| Icons        | Lucide React                   |

---

## 📄 License

MIT — free to use and deploy.
