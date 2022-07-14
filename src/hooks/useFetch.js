import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        loading: true,
        data: [],
        hasError: null
    })

    useEffect(() => {

        const getFetch = async () => {
            setState({
                ...state,
                loading: true
            })

            try {
                const res = await fetch(url)
                const data = await res.json()

                setState({
                    loading: false,
                    data: data,
                    hasError: null
                })
            } catch (error) {
                setState({
                    ...state,
                    hasError: error
                })
            }

        }

        getFetch()
    }, [url])

    return {
        state
    }
}   
