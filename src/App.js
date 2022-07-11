
import {Routes, Route} from 'react-router-dom'
import CoinPage from './routes/CoinPage'
import HomePage from './routes/HomePage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin" element={<CoinPage />} />
      </Routes>
    </>
  )
}

export default App
