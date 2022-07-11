import React, { useEffect, useState } from 'react'

const HomePage = () => {

    const [coins, setCoins] = useState([])

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

    useEffect(() => {
        const getCoins = async() => {
            const res = await fetch(url)
            const data = await res.json()

            setCoins(data)
            console.log(coins);
        }

        getCoins()
    }, [])

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
                    />
                    <table className="table">
                        <tbody>

                            { coins.map( coin => (
                                <tr key={coin.id}>
                                    <td key={coin.id}><img src={coin.image}/></td>
                                    <td>{coin.name}</td>
                                    <td>{coin.symbol}</td>
                                    <td>${coin.current_price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HomePage