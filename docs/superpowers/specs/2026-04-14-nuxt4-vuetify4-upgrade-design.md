# Nuxt 4 + Vuetify 4 Upgrade Design

## Problem

The personal website at acho.arnold.cm runs on Nuxt 3.19 with Vuetify 3.7 and `vuetify-nuxt-module@0.18.3`. These need to be upgraded to Nuxt 4, Vuetify 4, and the latest `vuetify-nuxt-module`. Additionally, the Inter font should be added via `@nuxt/fonts`.

## Approach

Upgrade all major dependencies in-place, adopt the new Nuxt 4 `app/` directory structure, and add `@nuxt/fonts` for Inter font loading.

## Scope

- **In scope:** Nuxt 4 upgrade, Vuetify 4 upgrade, `vuetify-nuxt-module` upgrade, `@nuxt/fonts` with Inter, new directory structure, dead code cleanup
- **Out of scope:** Content changes, new features, visual redesign

## Changes

### 1. Directory Structure Migration

Move to the Nuxt 4 `app/` directory layout:

```
app/
  pages/index.vue
  app.vue
assets/            (stays at root)
  x-logo.svg
content/           (stays at root)
public/            (stays at root)
server/            (stays at root)
nuxt.config.ts     (stays at root)
package.json       (stays at root)
tsconfig.json      (stays at root)
```

### 2. Dependency Updates

| Package               | From      | To                                      |
| --------------------- | --------- | --------------------------------------- |
| `nuxt`                | `^3.19.0` | `^4.0.0`                                |
| `vuetify`             | `^3.7.13` | `^4.0.0`                                |
| `vuetify-nuxt-module` | `0.18.3`  | `^1.0.0-beta.2`                         |
| `@nuxt/fonts`         | —         | `^0.11.0` (latest)                      |
| `vite-plugin-vuetify` | `^2.1.0`  | Remove (handled by vuetify-nuxt-module) |
| `@nuxtjs/sitemap`     | `7.2.6`   | Upgrade to latest Nuxt 4 compatible     |

### 3. Nuxt Config Updates (`nuxt.config.ts`)

- Add `@nuxt/fonts` to modules
- Remove `vite-plugin-vuetify` (vuetify-nuxt-module bundles it)
- Keep `vuetify-nuxt-module` config with dark theme and `mdi-svg` icons
- Update `compatibilityDate`
- Configure Inter as the default font family via Vuetify theme typography

### 4. Vuetify 4 Breaking Changes Addressed

| Change                        | Impact | Action                                          |
| ----------------------------- | ------ | ----------------------------------------------- |
| Default theme → "system"      | None   | Already explicitly set to "dark"                |
| CSS layers mandatory          | None   | Handled by vuetify-nuxt-module                  |
| Grid system overhaul          | Low    | Simple v-container/v-row usage; verify visually |
| Button text transform removed | None   | Acceptable for personal site                    |
| MD3 typography                | Low    | Inter font will override defaults anyway        |
| VImg attributes pass-through  | None   | No custom attrs on v-img                        |

### 5. Font Setup

- Add `@nuxt/fonts` module to `nuxt.config.ts`
- Configure Inter font family
- Set Inter as the body font via Vuetify's theme/defaults configuration

### 6. Code Cleanup

- Remove dead `import BlueskyIcon from "~/components/bluesky-icon.vue"` from `pages/index.vue`
- Remove `vite-plugin-vuetify` from devDependencies

## Testing

- Run `pnpm install` successfully
- Run `nuxt build` (or `pnpm build`) successfully
- Run `pnpm dev` and verify the page renders correctly with:
  - Dark theme
  - Inter font
  - All social links and icons visible
  - Avatar image loading
