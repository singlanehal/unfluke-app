import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Exchange.css";
import Header from "./Header";
import OurModel from "./Model";
import { Baseurl } from "./baseUrl";
import Loader from "./loader";
const Exchanges = () =>{
    const [loading,setLoading] = useState(true)
    const [exchanges,getExchanges] = useState([])
    useEffect(()=>{
        
        const getExchangeData = async() =>{
            const {data} = await axios.get(`${Baseurl}/exchanges`)
            console.log(data)
            getExchanges(data)
            setLoading(false)
        }
        getExchangeData()
    },[])
    return (
        <>
            {
                loading ? <Loader/> : <>
                <Header/>
                <OurModel/>
                <div>
                    {
                        exchanges.map((item,i)=>{
                            return(
                                <div key={i} className='ex-cards'>
                                    <div className='image'>
                                        <img height={"80px"} src={item.image} alt=""/>
                                    </div>
                                    <div className='name'>
                                        {item.name}
                                    </div>
                                    <div className='price'>
                                        {item.trade_volume_24h_btc.toFixed(0)}
                                    </div>
                                    <div className='rank'>
                                        {item.trust_score_rank}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                </>
            }
        </>
    )
}
export default Exchanges;