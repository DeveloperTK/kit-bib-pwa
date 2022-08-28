import { AreaData, NumberDate, RoomData, SeatBookingAPIResponse } from "./types";

const BASE_URL = "https://elite-proxy.vercel.app/api"
// const BASE_URL = "http://localhost:3001/api"

async function queryDetail(date: NumberDate, area: number) {
    //if (true) return formatQuery(a);

    const response = await (await fetch(BASE_URL
        + `/v1/mrbs/seat/area-realtime?year=${date.year}&month=${date.month}&day=${date.day}&area=${area}`)).json();

    if (response['error']) {
        throw response;
    }

    return formatQuery(response);
}

function formatQuery(response: any) {
    const rooms = response?.data?.rooms
    let area = {
        fetchedRooms: {}
    };
    for (const room of rooms) {
        area.fetchedRooms[room.id] = {
            name: room.name,
            slots: room.slots
        }
    }

    return area;
}

async function queryAvailability(date: NumberDate, areas: number[]): Promise<SeatBookingAPIResponse> {
    const stringAreas = areas.map(id => 'A' + id);
    const response = await (await fetch(BASE_URL
        + `/v1/mrbs/seat/bookings?year=${date.year}&month=${date.month}&day=${date.day}&areas=${JSON.stringify(stringAreas)}`)).json();

    if (response['error']) {
        throw response;
    }

    return response.data as SeatBookingAPIResponse;
}

const MRBS = {
    querySeatDetail: queryDetail,
    querySeatAvailability: queryAvailability,
}

export default MRBS;


const a = {"cached":false,"origin":"https://raumbuchung.bibliothek.kit.edu/sitzplatzreservierung/day.php?year=2022&month=08&day=24&area=42","received":"2022-08-24T19:20:08.172Z","status":200,"data":{"rooms":[{"id":"698","name":"A1 001","slots":[false,false,true,true]},{"id":"1164","name":"A1 002","slots":[false,false,false,true]},{"id":"699","name":"A1 003","slots":[false,false,true,true]},{"id":"1165","name":"A1 004","slots":[false,false,true,true]},{"id":"700","name":"A1 005","slots":[false,false,true,true]},{"id":"1166","name":"A1 006","slots":[false,true,false,true]},{"id":"701","name":"A1 007","slots":[false,false,false,true]},{"id":"1167","name":"A1 008","slots":[false,false,true,true]},{"id":"702","name":"A1 009","slots":[false,false,true,true]},{"id":"1168","name":"A1 010","slots":[false,false,true,true]},{"id":"703","name":"A1 011","slots":[false,false,true,true]},{"id":"1169","name":"A1 012","slots":[false,false,true,true]},{"id":"704","name":"A1 013","slots":[false,false,true,true]},{"id":"1170","name":"A1 014","slots":[false,false,true,true]},{"id":"705","name":"A1 015","slots":[true,false,true,true]},{"id":"1171","name":"A1 016","slots":[false,false,true,true]},{"id":"706","name":"A1 017","slots":[false,false,true,true]},{"id":"1172","name":"A1 018","slots":[false,false,true,true]},{"id":"707","name":"A1 019","slots":[false,false,true,true]},{"id":"1173","name":"A1 020","slots":[false,false,true,true]},{"id":"708","name":"A1 021","slots":[false,false,true,true]},{"id":"1174","name":"A1 022","slots":[false,false,true,true]},{"id":"709","name":"A1 023","slots":[false,false,true,true]},{"id":"1362","name":"A1 024","slots":[false,false,true,true]}]}}