const areaConfig = {
    groups: [
        {
            name: 'KIT-Bibliothek Süd',
            openDays: [true, true, true, true, true, true, true],
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
            openDays: [true, true, true, true, true, true, false],
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
            code: 0,
            name: '',
            timeSlots: []
        }
    ]
}

export default areaConfig