import { H3Event } from 'h3'
// if we import everything explicityly like below, the ts error is no longer there
// import { H3Event, setCookie } from 'h3'

export default function (event: H3Event) {
  setCookie(event, 'someCookieName', 'someCookieValue')
}
