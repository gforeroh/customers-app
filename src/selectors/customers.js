import { createSelector } from "reselect";

export const getCustomers = state => state.customers;

export const getCustomerById = createSelector(
    (state, props) => state.customers.find(c => c.id === props.id),
    customer => customer
);