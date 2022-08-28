export default function handler(req, res) {
    return res.json({
        max: 5,
        header: [ 'D1', 'D2', 'D3', 'D4', 'D5' ],
        timeSlots: [
            {
                name: 'SlotA',
                free: 1,
                data: [ false, false, false, false, true ]
            },
            {
                name: 'SlotB',
                free: 2,
                data: [ true, true, false, false, false ]
            },
            {
                name: 'SlotC',
                free: 3,
                data: [ true, true, true, false, false ]
            },
            {
                name: 'SlotD',
                free: 4,
                data: [ true, true, true, true, false ]
            }
        ]
    })
}