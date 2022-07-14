import React, { useEffect, useState, useCallback } from 'react';
import Axios from "axios";

export const useAirports = () => {
    const [data, setData] = useState(null)
    const handleApprove = useCallback(async () => {
        const fetchData = async () => {
            try {
                await Axios.get(
                    `https://cors-anywhere.herokuapp.com/https://aeroapi.flightaware.com/aeroapi/airports`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-apikey': 'GZMdJn2SkQewUGtZK1rSY41dGlleazUg',
                        'Accept': 'application/json; charset=UTF-8',
                        'Access-Control-Allow-Origin': '*'
                    }
                }).then(res => {
                    setData(res.data)
                })
            } catch (error) {
                console.error('Unable to fetch data:', error)
            }
        }

        // const intervalId = setInterval(() => {
            fetchData()
        // }, 5000)

        // return () => clearInterval(intervalId);
    }, [])

    return { onAirports: handleApprove, data }
}

export const useFlight = () => {
    const [fligtsdata, setfligtsdata] = useState(null)
    const handleApprove = useCallback(async (id) => {
        const fetchData = async () => {
            try {
                await Axios.get(
                    `https://cors-anywhere.herokuapp.com/https://aeroapi.flightaware.com/aeroapi/airports/${id}/flights`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-apikey': 'GZMdJn2SkQewUGtZK1rSY41dGlleazUg',
                        'Accept': 'application/json; charset=UTF-8',
                        'Access-Control-Allow-Origin': '*'
                    }
                }).then(res => {
                    setfligtsdata(res.data)
                })
            } catch (error) {
                console.error('Unable to fetch data:', error)
            }
        }

        fetchData()
    }, [])

    return { onFlight: handleApprove, fligtsdata }
}