import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const ExpenseDashboardPage = () => (
    <div>
        This is the dashboard component.
    </div>
);

const AddExpensePage = () => (
    <div>
        This is the add expense component.
    </div>
);

const EditExpensePage = () => (
    <div>
        This is the edit expense component.
    </div>
);

const HelpPage = () => (
    <div>
        This is the help component.
    </div>
);

const NotFoundPage = () => (
    <div>
        Not found! - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' exact={true} activeClassName='is-active'>Dashboard</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
        <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true}/>
                <Route path='/create' component={AddExpensePage}/>
                <Route path='/edit' component={EditExpensePage}/>
                <Route path='/help' component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));