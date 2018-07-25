import { createStore } from 'redux';

const incrementCount = ( { incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const resetCount = () => ({
    type: 'RESET',
    reset: 0
});

const setCount = ( { setValue = 101 } = {} ) => ({
    type: 'SET',
    setValue: setValue
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
    case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
            count: state.count + incrementBy
        };
    case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
            count: state.count - decrementBy
        };
    case 'SET':
        const setValue = typeof action.setValue === 'number' ? action.setValue : 101;
        return {
            count: action.setValue
        };
    case 'RESET':
        return {
            count: 0
        };
    default:
        return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - object that gets sent to the store

// increment
store.dispatch(incrementCount({ incrementBy: 5 }));

//unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ setValue: 99 }));
