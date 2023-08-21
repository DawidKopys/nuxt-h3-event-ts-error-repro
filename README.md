# nuxt-schema-error-repro

1. Run `npm i` in `nuxt-layer` directory
2. Run `npm i` in `app` directory
3. Run `npx nuxi typecheck` / `npm run dev` / `npx vue-tsc --noEmit` inside `app` directory.

You should see below errors:
```
../nuxt-layer/server/api/foo.ts:7:13 - error TS2345: Argument of type 'H3Event' is not assignable to parameter of type 'H3Event<EventHandlerRequest>'.

7   setCookie(event, 'someCookieName', 'someCookieValue')
              ~~~~~

../nuxt-layer/server/utils/someUtil.ts:6:13 - error TS2345: Argument of type 'H3Event' is not assignable to parameter of type 'H3Event<EventHandlerRequest>'.
  Type 'H3Event' is missing the following properties from type 'H3Event<EventHandlerRequest>': method, headers, toJSON, fetch, $fetch

6   setCookie(event, 'someCookieName', 'someCookieValue')
              ~~~~~


Found 2 errors in 2 files.

Errors  Files
     1  ../nuxt-layer/server/api/foo.ts:7
     1  ../nuxt-layer/server/utils/someUtil.ts:6
```
