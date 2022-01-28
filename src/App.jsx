import './App.scss'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import BudgetCard from './components/budget-card/budget-card.component'

function App() {
    return (
        <Container className='my-4'>
            <Stack direction='horizontal' gap={3} className='mb-4'>
                <h1 className='me-auto'>Budget</h1>
                <Button variant='primary'>Add Budget</Button>
                <Button variant='outline-primary'>Add Expense</Button>
            </Stack>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
                gap: "1rem",
                alignItems: "flex-start"
            }}>
            <BudgetCard name="Investments" amount={200} max={500}></BudgetCard>
            </div>
        </Container>

    )
}

export default App