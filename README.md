# KIT Library Seat-Booking PWA

Motivation: the KIT website sucks ass

## What this bad boy does:

When opening the index page, the different areas are displayed. Those are based on `src/areas.config.js`

Every `AreaCard` fetches some data from the KIT Server. <br/>
This creates _a lot_ of requests (but is fine i guess 👉👈)

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
- [ ] Redo the UI without bootstrap (probably won't happen)
- [ ] Explain to SCC why their servers get so many requests

## Contributing

yes, please
