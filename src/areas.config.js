const allWeek = [true, true, true, true, true, true, true]
const mondayThroughSaturday = [true, true, true, true, true, true, false]
const mondayThroughFriday = [true, true, true, true, true, false, false]

const areaConfig = {
    requestCacheDuration: process.env.REQUEST_CACHE_DURATION || 1000 * 60, // 60 seconds
    groups: [
        {
            name: 'KIT-Bibliothek Süd',
            openDays: allWeek,
            timeSlots: [
                {
                    id: 'kit_sued_0',
                    name: 'Vormittag',
                    from: { hour: 8, minute: 0 },
                    to: { hour: 12, minute: 45 }
                },
                {
                    id: 'kit_sued_1',
                    name: 'Nachmittag',
                    from: { hour: 13, minute: 0 },
                    to: { hour: 17, minute: 45 }
                },
                {
                    id: 'kit_sued_2',
                    name: 'Abend',
                    from: { hour: 18, minute: 0 },
                    to: { hour: 21, minute: 45 }
                },
                {
                    id: 'kit_sued_3',
                    name: 'Nacht',
                    from: { hour: 22, minute: 0 },
                    // the last block wraps around to the new day and a day always starts at 6 in the morning
                    to: { hour: 24 + 6, minute: 0 },
                }
            ],
            areas: [
                {
                    code: 20,
                    name: '1.OG (LSW)'
                },
                {
                    code: 19,
                    name: '2.OG (LST)'
                },
                {
                    code: 21,
                    name: '3.OG (LSG)'
                },
                {
                    code: 42,
                    name: 'Altbau 1.OG (LBS)'
                },
                {
                    code: 34,
                    name: 'Altbau 2.OG (LSN)'
                },
                {
                    code: 35,
                    name: 'Altbau 2.OG Empore'
                },
                {
                    code: 40,
                    name: 'Altbau EG (LBS)'
                },
            ]
        },
        {
            name: 'Fachbibliothek HKA',
            openDays: mondayThroughSaturday,
            timeSlots: [
                {
                    id: 'hka_0',
                    name: 'Vormittag',
                    from: { hour: 9, minute: 0 },
                    to: { hour: 13, minute: 0 }
                },
                {
                    id: 'hka_1',
                    name: 'Nachmittag',
                    from: { hour: 13, minute: 30 },
                    to: { hour: 18, minute: 0 }
                },
                {
                    id: 'hka_2',
                    name: 'Abend',
                    from: { hour: 18, minute: 0 },
                    to: { hour: 22, minute: 0 }
                },
            ],
            areas: [
                {
                    code: 29,
                    name: 'Lernräume Ost'
                },
                {
                    code: 28,
                    name: 'Lernräume West'
                }
            ]
        }
    ],
    areas: [
        {
            code: 25,
            name: 'KIT-Fachbib Mathematik',
            openDays: mondayThroughFriday,
            timeSlots: [
                {
                    id: 'kit_mathebib_0',
                    name: 'Vormittag',
                    from: { hour: 9, minute: 0 },
                    to: { hour: 13, minute: 0 }
                },
                {
                    id: 'kit_mathebib_1',
                    name: 'Nachmittag',
                    from: { hour: 13, minute: 0 },
                    to: { hour: 16, minute: 0 }
                }
            ]
        },
        {
            code: 24,
            name: 'KIT-Fachbib Physik',
            openDays: mondayThroughFriday,
            timeSlots: [
                {
                    id: 'kit_physikbib_0',
                    name: 'Vormittag',
                    from: { hour: 9, minute: 0 },
                    to: { hour: 13, minute: 0 }
                },
                {
                    id: 'kit_physikbib_1',
                    name: 'Nachmittag',
                    from: { hour: 13, minute: 0 },
                    to: { hour: 16, minute: 0 }
                },
                {
                    id: 'kit_physikbib_2',
                    name: 'Abend',
                    from: { hour: 16, minute: 0 },
                    to: { hour: 19, minute: 0 }
                }
            ]
        },
        {
            code: 26,
            name: 'KIT-Bib Campus Nord',
            openDays: mondayThroughFriday,
            timeSlots: [
                {
                    id: 'kit_nord_0',
                    name: 'Vormittag',
                    from: { hour: 9, minute: 0 },
                    to: { hour: 11, minute: 45 }
                },
                {
                    id: 'kit_nord_1',
                    name: 'Nachmittag',
                    from: { hour: 12, minute: 0 },
                    to: { hour: 15, minute: 0 }
                }
            ]
        },
        {
            code: 37,
            name: 'KIT Lernzentrum (Süd)',
            openDays: allWeek,
            timeSlots: [
                {
                    id: 'kit_lzaf_0', // lzaf = Lernzentrum am Fasanenschloesschen
                    name: 'Vormittag',
                    from: { hour: 9, minute: 0 },
                    to: { hour: 13, minute: 30 }
                },
                {
                    id: 'kit_lzaf_1', // lzaf = Lernzentrum am Fasanenschloesschen
                    name: 'Nachmittag',
                    from: { hour: 13, minute: 30 },
                    to: { hour: 18, minute: 0 }
                },
                {
                    id: 'kit_lzaf_2', // lzaf = Lernzentrum am Fasanenschloesschen
                    name: 'Abend',
                    from: { hour: 18, minute: 0 },
                    to: { hour: 22, minute: 0 }
                }
            ]
        },
        {
            code: 32,
            name: 'DHBW Lernplätze',
            openDays: mondayThroughFriday,
            timeSlots: [
                {
                    id: 'dhbw_0',
                    name: 'Vormittag',
                    from: { hour: 8, minute: 0 },
                    to: { hour: 11, minute: 45 }
                },
                {
                    id: 'dhbw_1',
                    name: 'Nachmittag',
                    from: { hour: 12, minute: 0 },
                    to: { hour: 16, minute: 0 }
                }
            ]
        }
    ]
}

export default areaConfig