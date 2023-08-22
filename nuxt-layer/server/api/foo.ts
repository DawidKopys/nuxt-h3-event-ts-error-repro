// import { defineEventHandler } from 'h3'
// if we import everything explicityly like below, the ts error is no longer there
// import { defineEventHandler, setCookie } from 'h3'
import someUtil from '../utils/someUtil'
import { defineEventHandler } from '#imports'

export default defineEventHandler((event) => {
  setCookie(event, 'someCookieName', 'someCookieValue')
  someUtil(event)

  return {
    hello: 'world'
  }
})
