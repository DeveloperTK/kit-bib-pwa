// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const KIT_BIB_TIMEBLOCKS = [
    {
        name: "Vormittag",
        dow: [true, true, true, true, true, true, true],
        from: { hour: 8, minute: 0 },
        to: { hour: 12, minute: 45 }
    },
    {
        name: "Nachmittag",
        dow: [true, true, true, true, true, true, true],
        from: { hour: 13, minute: 0 },
        to: { hour: 17, minute: 45 }
    },
    {
        name: "Abend",
        dow: [true, true, true, true, true, true, true],
        from: { hour: 18, minute: 0 },
        to: { hour: 22, minute: 0 }
    },
    {
        name: "Nacht",
        dow: [true, true, true, true, true, true, true],
        from: { hour: 22, minute: 0 },
        to: { hour: 30, minute: 0 }
    }
]

export default function handler(req, res) {
    res.status(200).json({
        '20': {
            areaCode: '20',
            title: "Neubau 1.OG",
            name: "1.OG KIT-BIB (LSW)",
            sortOrder: '010',
            blocks: KIT_BIB_TIMEBLOCKS
        },
        '19': {
            areaCode: '19',
            title: "Neubau 2.OG",
            name: "2.OG KIT-BIB (LST)",
            sortOrder: '020',
            blocks: KIT_BIB_TIMEBLOCKS
        },
        '21': {
            areaCode: '21',
            title: "Neubau 3.OG",
            name: "3.OG KIT-BIB (LSG)",
            sortOrder: '030',
            blocks: KIT_BIB_TIMEBLOCKS
        }
    })
}
