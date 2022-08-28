export interface AppContext {
    selectedDate: NumberDate;
    selectedSlot: number;
    bookings: Booking[];
}

export interface MRBSData {
    [key: number]: AreaData
}

export interface AreaData {
    fetchedRooms: {
        [key: number]: RoomData
    }
}

export interface RoomData {
    name: string;
    slots: boolean[];
}

export interface Booking {
    date: NumberDate;
    slot: number;
    area: number;
    room: number;
}

export interface NumberDate {
    day: number;
    month: number;
    year: number;
}

export interface SeatBookingAPIResponse {
    [index: string]: SeatBookings;
}

export interface SeatBookings {
    [index: number]: SeatBookingSlot;
}

export interface SeatBookingSlot {
    start_time: string;
    end_time: string;
    occupied: number;
    free: number;
}
