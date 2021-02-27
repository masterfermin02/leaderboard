import { createContext } from 'react';

const AppContext = createContext({
    error: null,
    users: [],
    isLoading: false
});

export default AppContext;
