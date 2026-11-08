# Portfolio (Next.js + Tailwind CSS)

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Edit content (no need to touch the page code)
- `data/profile.js`  → name, intro, social links
- `data/skills.js`   → skill rows and tools
- `data/projects.js` → projects

## Add a new project
Open `data/projects.js`, copy one project block, paste it at the end of the
array and change the values. Optional screenshot: put it in `public/projects/`
and set `image: "/projects/shot.png"`.

## Deploy
Push to GitHub and import the repo on vercel.com.

## Change your photo
Replace `public/photo.jpg` with your own image (portrait, about 4:5 works best).
