import React, {useEffect, useState} from "react";


const Privat = () => {
    const [exchange, setExchange] = useState([])

    const fetchExchange = () => {

        fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5", { mode: 'no-cors'})
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setExchange(res)
            })
    }


    useEffect(() => {
        fetchExchange()
    }, [])
    console.log(exchange.find(element => element.ccy = "USD"))

    return <div>

    </div>


}


export default Privat;