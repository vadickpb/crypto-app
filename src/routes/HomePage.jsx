import React, { useEffect, useState } from 'react'
import CryptoList from '../components/CryptoList'
import Loading from '../components/Loading'
import { useFetch } from '../hooks/useFetch'

const HomePage = () => {

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

    const {state} = useFetch(url)
    
    const [searchInput, setSearchInput] = useState("")

    const {loading, data} = state

    const handleInputChange = ({target}) => {
        setSearchInput(target.value)
    }

    const filterCoins = data.filter(newData => newData.name.toLowerCase().includes(searchInput.toLowerCase()))

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'>
                    <h5 className='card-title text-center'>Crypto Monedas</h5>
                </div>
                <div className='card-body'>
                    <input
                        className='form-control'
                        placeholder='ingrese la criptomoneda'
                        name='cryptoname'
                        // value={cryptoname}
                        onChange={handleInputChange}
                    />
                    <hr/>
                    {
                        loading ? <Loading /> : <CryptoList filterCoins={filterCoins} />
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage