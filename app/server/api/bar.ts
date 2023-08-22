import { defineEventHandler } from '#imports'

export default defineEventHandler((event) => {
  setCookie(event, 'someCookieName', 'someCookieValue')

  return {
    hello: 'world'
  }
})
