import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import Airports from './components/Airports';
import Arrivals from './components/Arrivals';
import Departures from './components/Departures';
import { useAirports, useFlight } from './hooks/api';
import Navbar from './components/Navbar';
import { BackImg } from './components/styles';

export default () => {
    const { onAirports, data } = useAirports();
    const [selectedAirport, setAirport] = useState('00C');
    const { onFlight, fligtsdata } = useFlight();

    const isMobile = useMediaQuery("(max-width: 1000px)");

    useEffect(() => {
        onAirports();
    }, [])

    useEffect(() => {
        if (selectedAirport) {
            onFlight(selectedAirport);
        }
    }, [selectedAirport])


    useEffect(() => {
        if (fligtsdata) {
            console.log("fligtsdata => ", fligtsdata);
            localStorage.setItem("flightsdata", JSON.stringify(fligtsdata));
        }
    }, [fligtsdata])

    const SelectAirport = (value) => {
        setAirport(value.code);
    }

    return (
        <>
            <Navbar />
            <Box sx={{ flexGrow: 1 }} m='20px'>
                {
                    !isMobile ?
                        <Grid container justifyContent="space-between">
                            <Grid item xs={2}>
                                <Airports airports={data} SelectAirport={SelectAirport} selectedAirport={selectedAirport} />
                            </Grid>
                            <Grid item xs={4.5}>
                                <Arrivals />
                            </Grid>
                            <Grid item xs={4.5}>
                                <Departures />
                            </Grid>
                        </Grid>
                        :
                        <Grid container>
                            <Grid item xs={12}>
                                <Airports airports={data} SelectAirport={SelectAirport} selectedAirport={selectedAirport} />
                            </Grid>
                            <Grid item xs={12}>
                                <Arrivals />
                            </Grid>
                            <Grid item xs={12}>
                                <Departures />
                            </Grid>
                        </Grid>
                }
            </Box>
        </>
    )
}


