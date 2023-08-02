import { createSlice, configureStore } from '@reduxjs/toolkit';
const initialCounterState = {
                        counter: 0,
                        showCounter: true,
                    };

const initialAuthState = {'isAuthenticated': false};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        }, 
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const authSlice = createSlice({
    name: 'authentification',
    initialState: initialAuthState,
    reducers: {
        login(state) { 
            state.isAuthenticated = true;
        },
        logout(state) { 
            state.isAuthenticated = false;
        }
    }
});

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});


export default store;