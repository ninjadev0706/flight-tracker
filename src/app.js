import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {Airports} from './components/Airports';
import Search from './components/Search';
import { useAirports } from './hooks/api';

export default () => {
    const [carrier, setCarrier] = useState("");
    const [date, setDate] = useState("");
    const [flightNumber, setFlightNumber] = useState("");

    const airports = useAirports();
    console.log(airports);
    return (
        <div>
            <Search date={date} setDate={setDate} flightNumber={flightNumber} setFlightNumber={setFlightNumber} carrier={carrier} setCarrier={setCarrier} />
            <div>
                <Box sx={{ width: 1, margin: '20px' }}>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                        <Airports />
                        
                        <Box gridColumn="span 8">
                            <div>xs=8</div>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    )
}


