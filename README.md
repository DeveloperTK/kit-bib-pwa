Note of Archival: After three gruesome years, they finally changed the reservation system to a usable one. This website is not needed any longer.

# KIT Library Seat-Booking PWA

Motivation: the KIT website is bad

## What this does:

When opening the index page, the different areas are displayed. Those are based on `src/areas.config.js`

Every `AreaCard` fetches some data from the KIT Server. <br/>
This creates _a lot_ of requests (which I hope is fine)

### API "Documentation"
- `/api/fetch?area=<code>` fetches the booking data for a given `area` (KIT Neubau 1.OG has code `20`)
- `/api/book?area=<area>&room=<seat-id>&period=<slot-id>` basically redirects to KIT website
- `/api/dummy_fetch?area=0` use this when testing (a lot quicker AND you don't spam the KIT servers)

Note: the `/api/fetch` endpoint uses the `/api/dummy_fetch` handler when `NODE_ENV === 'development'`

## TODO
- [x] Fix inconsistent (and sometimes straight up wrong) server time in `/src/utils.js`
- [x] Implement all areas (build some ui for ungrouped areas)
- [x] Do SEO and better enforce SSR and SSG with next
- [x] Cache the fetch requests by default for ~60 seconds
- [ ] Explain to SCC why their servers get so many requests
