import React, { useContext, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import useLocalStorage from '../hooks/useLocalStorage'

const BudgetsContext = React.createContext()


//custom hook to use the budget context
export function useBudgets() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {

    const [budgets, setBudgets] = useLocalStorage('budgetsdata', [])
    const [expenses, setExpenses] = useLocalStorage('expenses', [])

    //A budget looks like this
    // {
    //     "id",
    //     "name",
    //     "max"
    // }

    // An expense will look like this
    // {
    //     "id",
    //     "budgetId",
    //     "description",
    //     "amount"
    // }


    //This function will display all the expenses in a particular budget
    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }

    //This function creates a new budget
    function addBudget({ name, max }) {
        setBudgets(prevBudgets => {
            if (prevBudgets.find(budget => budget.name === name)) {
                console.log("This budget already exists")
                return prevBudgets
            }
            return [...prevBudgets, { id: uuidV4(), name, max }]
        })
    }

    //This function will create a new expense inside a specific budget
    function addExpense({ budgetId, description, amount }) {
        setExpenses(prevExpenses => {
            return [...prevExpenses, { id: uuidV4(), budgetId, description, amount }]
        })
    }

    function deleteBudget(id) {
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })

    }

    function deleteExpense(id) {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }


    return (
        <BudgetsContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteExpense,
            deleteBudget
        }}>

            {children}
        </BudgetsContext.Provider>
    )
}