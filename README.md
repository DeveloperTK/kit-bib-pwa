# KIT Library Seat-Booking PWA

Motivation: the KIT website sucks ass

## What this bad boy does:

When opening the index page, the different areas are displayed. Those are based on `src/areas.config.js`

Every `AreaCard` fetches some data from the KIT Server. This creates _a lot_ of requests (but is fine i guess 👉👈)

### API "Documentation"
- `/api/fetch?area=<code>` fetches the booking data for a given `area` (KIT Neubau 1.OG has code `20`)
- `/api/book?area=<area>&room=<seat-id>&period=<slot-id>&day=<day>&month=<month>&year=<year>` basically redirects to KIT website
- `/api/dummy_fetch?area=0` use this when testing (a lot quicker AND you don't spam the KIT servers)
- `/api/areas` unused, ignore

## TODO
- [ ] Fix inconsistent (and sometimes straight up wrong) server time in `/src/Utils.js`
- [ ] Implement all areas (build some ui for ungrouped areas)
- [ ] Redo the UI without bootstrap (probably won't happen)
- [ ] Explain to SCC why their servers get so many requests

## Contributing

yes, please
