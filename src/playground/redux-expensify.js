import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense( { description: 'Rent', amount: 300, createdAt: -21000} ));
const expenseTwo = store.dispatch(addExpense( { description: 'Coffee', amount: 500, createdAt: -1000} ));

//store.dispatch(removeExpense({ id: expenseOne.expense.id}));

//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter('ffe'));
//store.dispatch(setTextFilter());

//store.dispatch(sortByDate());
store.dispatch(sortByAmount());

//store.dispatch(setStartDate(-2000));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(-2500));
//store.dispatch(setEndDate());

// demo state

const demoState = {
    expenses: [{
        id: 'sdgdhsdfd',
        description: 'January Rent',
        note: 'final payment for the address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};