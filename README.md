# Amanda Städ Kristianstad

Webbplats för Amanda Städ Kristianstad – professionell städning i Kristianstad.

## Teknisk stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## Köra projektet

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000/Amanda](http://localhost:3000/Amanda) (basePath för GitHub Pages).

## Bygga för produktion

```bash
npm run build
```

Det skapas en statisk `out/`-mapp. Lokal test med t.ex. `npx serve out`.

## Deploy till GitHub Pages

Sajten är byggd för att visas på **https://niazjano.github.io/Amanda/**.

1. **Bygg:**
   ```bash
   npm run build
   ```

2. **Deploy:** Pusha innehållet i `out/` till GitHub Pages.
   - **Alternativ A – gh-pages-branch:** Skapa en branch `gh-pages`, kopiera innehållet i `out/` till branch-roten, pusha. I repo-inställningarna: Settings → Pages → Source = "Deploy from a branch" → Branch: `gh-pages` / folder: `/ (root)`.
   - **Alternativ B – GitHub Action:** Använd en workflow som kör `npm run build` och publicerar mappen `out` med t.ex. `peaceiris/actions-gh-pages`.

3. Efter deploy: öppna **https://niazjano.github.io/Amanda/** – startsidan (index.html) ska laddas i stället för README.

## Struktur

- `src/app/` – Sidor och layout
- `src/components/` – Återanvändbara komponenter (Hero, Services, Pricing, FAQ, m.m.)
- `src/lib/` – Hjälpfunktioner och konstanter (t.ex. bildsökvägar)
- `public/images/` – Bilder och logotyp

## Kontaktuppgifter (i sidfot och CTA)

- E-post: info@amandastad.se
- Telefon: 044-785 30 02
