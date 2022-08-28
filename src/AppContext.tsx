import React from 'react';
import { AppContext } from '@/src/types';
import { localDateInKTown } from './utils';

const defaultContext: AppContext = {
    selectedDate: { day: localDateInKTown()[0], month: localDateInKTown()[1], year: localDateInKTown()[2] },
    selectedSlot: 0,
    bookings: []
}

export const AppContextContainer: React.Context<AppContext> = React.createContext(defaultContext);

const AppContextWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    let sharedState: AppContext = {
        selectedDate: { day: localDateInKTown()[0], month: localDateInKTown()[1], year: localDateInKTown()[2] },
        selectedSlot: 0,
        bookings: []
    };

    return (
        <AppContextContainer.Provider value={sharedState}>
            {children}
        </AppContextContainer.Provider>
    );
}

export default AppContextWrapper;

export function useAppContext() {
    return React.useContext(AppContextContainer);
}
