import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: '123abc'
    });
});

// setup testcase
// call editExpense {note: "New note"}
// make assersion

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: "New note" });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note'
        }
    })
});

test('Should setup add expense action object', () => {
    const expenseData = {
        description: 'test description',
        amount: 123000,
        note: 'this is a new expense',
        createdAt: 1000
    }
    const action = addExpense({
        ...expenseData
    });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('Should setup add expense action object with default value', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    })
});