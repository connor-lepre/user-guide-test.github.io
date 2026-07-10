# MH Residential update — files for `user-guide-test.github.io`

This bundle wires the new **MH Residential** guides into your existing site. Drop these
files into the **root** of the repo (same folder as `acdhs.css`), commit, and push.

## New files (add these — 7)

| File | What it is |
|---|---|
| `mh-residential-landing.html` | MH Residential landing page — overview, Okta access, referral lifecycle, 6 task buckets |
| `mh-res-find-work.html` | Dashboard + Advanced Search |
| `mh-res-make-referral.html` | The full 13-screen referral workflow |
| `mh-res-manage-case.html` | Case Summary + Case Notes (cross-links the referral page for shared screens) |
| `mh-res-transfers-beds.html` | Transfer referral, bed swap, placement outcome, housing inventory |
| `mh-res-documents.html` | Document folder, share case, activity log |
| `mh-res-forms.html` | RTTM guide + admission checklist |

## Changed files (replace these — 2)

| File | What changed |
|---|---|
| `index.html` | Only the **MH Residential** card changed: its "Open guides" button and the six jump-to-task links now point to the new local pages instead of the live county site. Its `data-updated-bucket` moved to "This week" so it surfaces under the *Last updated* sort. Everything else — the program-area buttons, platform filter, the task filter, the sort control, search, and all other 21 tool cards — is byte-for-byte your current version. |
| `dhs-sitemap.html` | Only the MH Residential entry's link changed, from the live county landing to `mh-residential-landing.html`. All other apps are untouched. |

## Files NOT included (unchanged — already correct in the repo)

`acdhs.css` (the MH pages use it as-is), `ansa-landing.html`, `ansa-find-register-client.html`,
and `dhs-job-aid-catalog.xlsx`. Nothing to do with these.

## How to push

**GitHub web UI:** open the repo → *Add file → Upload files* → drag all 9 files in →
it will overwrite `index.html` and `dhs-sitemap.html` and add the 7 new pages → *Commit changes*.

**Command line:**
```bash
# from your local clone, with these 9 files copied into the repo root
git add index.html dhs-sitemap.html mh-*.html
git commit -m "Add MH Residential guides; wire home page and sitemap to them"
git push
```

The live site will rebuild at `https://rrybalov.github.io/user-guide-test.github.io/` within a minute.

## Notes / optional follow-ups

- The MH pages depend on `acdhs.css`, which is already in the repo — no CSS change needed.
- In the sitemap, **ANSA** still opens the live county page (only MH was in scope this round).
  Say the word and I'll repoint ANSA to `ansa-landing.html` too.
- The MH guides span 2017–2024 and each page shows its own review date; the tool is flagged
  "needs review" by design so the staleness is visible rather than buried in the PDFs.
