import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const CoinPage = () => {

    const { id } = useParams()
    const url = `https://api.coingecko.com/api/v3/coins/${id}`
    const navigate = useNavigate()

    const { state } = useFetch(url)

    const { loading, data } = state

    const onBackPage = () => {
        navigate(-1)
    }




    console.log(state);
    return (
        <div className='container mt-5'>

            <div className='col'>

                {loading ? (
                    <div className='alert alert-info'>
                        <span className='text-center'>Cargando...</span>
                    </div>
                ) : (

                    <div className="card">
                        <div className='row no-gutters'>
                            <div className="col-4 justify-center">
                                <img
                                    className='card-img img-thumbnail p-3'
                                    src={data.image.large}
                                    alt={data.name}
                                />
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <h3 className='card-title'>{data.name}</h3>
                                    <hr />

                                    <p className='card-text'> 1 {data.symbol.toUpperCase()} =</p>
                                    <span className='card-text'><b>$ {data.market_data.current_price.usd.toLocaleString('es-PE')}</b></span>


                                    <p className='card-text'>Cap. de Mercado: $ {data.market_data.market_cap.usd.toLocaleString('es-PE')}</p>
                                    <p className='card-text'>Volumen total: $ {data.market_data.total_volume.usd.toLocaleString('es-PE')}</p>
                                    <p className='card-text'>24h Hightl: $ {data.market_data.high_24h.usd.toLocaleString('es-PE')}</p>
                                    <p className='card-text'>24h Low: $ {data.market_data.low_24h.usd.toLocaleString('es-PE')}</p>

                                    <button 
                                        onClick={onBackPage}
                                        className='btn btn-outline-primary'
                                    >
                                        Regresar
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>

                )
                }
            </div>
        </div>

    )
}

export default CoinPage