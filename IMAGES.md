# Screenshots to add

The site references the screenshots below but they aren't in the repo yet. Take
each one, save it under **`images/`** with the exact **file name** in the table,
then tell me and I'll wire anything extra if needed (they're already referenced,
so just dropping the files in makes them appear).

Until a file exists, the site hides that image and shows only its caption (a
subtle "pending" box) — so nothing looks broken.

## Guidelines

- **Format / name:** PNG, exactly the file name listed (lowercase, hyphenated).
- **Width:** ~1400–1800px (retina-ish); the site scales them down.
- **Theme:** the site is dark-friendly — the app's **dark theme** looks best, but
  match whatever you prefer; be consistent across shots.
- **Crop:** trim OS window chrome where possible; keep it focused on the UI area
  described. Avoid personal paths/tokens you don't want public (blur if needed).
- **Content:** use a couple of realistic sample projects so the shots feel alive.

## Shots

| File (`images/…`) | Page | What to capture |
| --- | --- | --- |
| `home-dashboard.png` | Home (hero) | The dashboard with several project cards — the "wow, everything at a glance" shot. |
| `intro-overview.png` | Docs → Introduction | The dashboard overview (can be the same as `home-dashboard.png` if you like). |
| `first-launch-settings.png` | Docs → First launch | **Settings → Folders**, showing the scan roots being added. |
| `dashboard-tour.png` | Docs → The dashboard | The dashboard highlighting the **top bar, filters and cards** (can reuse the home shot). |
| `running-logs.png` | Docs → Running & logs | A project's **live colored logs** view (Details → Comandos → View logs). |
| `git-tab.png` | Docs → Git | The **Git tab** in a project's Details — sync badge, branch, ahead/behind, and the pull/push/commit/stash/discard buttons. |
| `env-panel.png` | Docs → Environment & secrets | The **environment panel** with at least one **secret** (masked) and one published var, plus the add row. |
| `kanban-board.png` | Docs → Kanban & notes | The **kanban board** with a few columns and task cards (priority/labels/checklist visible). |
| `docker-panel.png` | Docs → Docker containers | The **Containers (Docker)** panel listing services with state/ports and start/stop/restart. |
| `extensions-modal.png` | Docs → Installing (extensions) | The **Extensions** modal — installed list and/or the "browse official extensions" list. |

> Tip: `home-dashboard.png`, `intro-overview.png` and `dashboard-tour.png` can all
> be the same dashboard screenshot saved under the three names, if you'd rather
> not take three.

## Optional (nice to have later)

- An **animated GIF** of discovering + starting a project for the home hero.
- A **logo / social preview** image (`images/og-cover.png`, ~1200×630) for link
  previews — I can wire the `<meta og:image>` when you add it.
