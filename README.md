# nuxt-schema-error-repro

1. Run `npm i` in `nuxt-layer` directory
2. Run `npm i` in `app` directory
3. Run `npx nuxi typecheck` / `npm run dev` / `npx vue-tsc --noEmit` inside `app` directory.

You should see below error:
```
Nuxi 3.6.5                                                                                            4:35:26 PM
../nuxt-layer/app.config.ts:7:16 - error TS2664: Invalid module name in augmentation, module '@nuxt/schema' cannot be found.

7 declare module '@nuxt/schema' {
                 ~~~~~~~~~~~~~~


Found 1 error in ../nuxt-layer/app.config.ts:7
```
