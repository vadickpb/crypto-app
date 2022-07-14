import {Link} from 'react-router-dom'

const CryptoList = ({ filterCoins }) => {

    const onNavigateCryptoItem = () => {

    }
    return (
        <table className="table">
            <tbody>
                {filterCoins.map(coin => (
                    <tr key={coin.id}>
                        <td key={coin.id}><img src={coin.image} /></td>
                        <td>{coin.name}</td>
                        <td>{coin.symbol}</td>
                        <td>${coin.current_price}</td>
                        <td>
                            <Link 
                                className='btn btn-outline-info'
                                to={`/coin/${coin.id}`}
                            >
                                Mas Info...
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CryptoList