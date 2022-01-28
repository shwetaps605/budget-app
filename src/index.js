import React from "react"
import ReactDOM from "react-dom"
import App from './App'
import { BudgetsProvider } from './contexts/BudgetContext'

ReactDOM.render(
    <BudgetsProvider>
        <App />
    </BudgetsProvider> ,
    document.getElementById('root'))