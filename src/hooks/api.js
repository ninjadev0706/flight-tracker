import React, { useEffect, useState } from 'react';
import Axios from "axios";

export const useAirports = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("++");
                await Axios.get(
                    `https://aeroapi.flightaware.com/aeroapi/airports`, {
                    headers: { 
                        'Content-Type': 'application/json',
                        'x-apikey': 'GZMdJn2SkQewUGtZK1rSY41dGlleazUg',
                        'Accept': 'application/json; charset=UTF-8',
                        'Access-Control-Allow-Origin': '*'
                    }
                }).then(res => {
                    console.log(res.data)
                })
                // console.log("airports", response)
                // const responsedata = await response.json()

                // setData(responsedata)
            } catch (error) {
                console.error('Unable to fetch data:', error)
            }
        }

        fetchData()
    }, [setData])

    return data
}