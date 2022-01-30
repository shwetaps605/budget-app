import './App.scss'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import BudgetCard from './components/budget-card/budget-card.component'
import AddBudgetModal from './components/add-budget/add-budget-modal.component'
import { useState } from 'react'
import { useBudgets } from './contexts/BudgetContext'

function App() {

    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
    const { budgets,expenses,getBudgetExpenses } = useBudgets()
    console.log(budgets);

    return (
        <>
            <Container className='my-4'>
                <Stack direction='horizontal' gap={3} className='mb-4'>
                    <h1 className='me-auto'>Budget</h1>
                    <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
                    <Button variant='outline-primary'>Add Expense</Button>
                </Stack>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
                    gap: "1rem",
                    alignItems: "flex-start"
                }}>
                   
                {
                    budgets.map(budget => {

                        const amount = getBudgetExpenses(budget.id)
                        .reduce((total,expense) => total + expense.amount,0)


                        return(
                            <BudgetCard
                            key={budget.id}
                            name={budget.name}
                            amount={amount}
                            max={budget.max}></BudgetCard>
                        )
                    })
                }
                </div>
            </Container>
            <AddBudgetModal show={showAddBudgetModal} handleClose={() => { setShowAddBudgetModal(false) }} />
        </>


    )
}

export default App