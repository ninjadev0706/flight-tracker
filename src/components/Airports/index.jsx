import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { AirportImage, AirContainer } from './styles';
import { Title } from '../styles';

const Airports = ({ airports, SelectAirport, selectedAirport }) => {

    return (
        <AirContainer>
            <Title>AIRPORTS</Title>
            {airports && airports.airports.map((value, index) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <ListItem
                        key={index}
                        sx={{ margin: '5px 0', border: '1px solid #2d74c4', bgcolor: value.code === selectedAirport ? '#2d74c4': '#13181c' }}
                        disablePadding
                        onClick={() => SelectAirport(value)}
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <AirportImage
                                    alt={`Avatar n°${value + 1}`}
                                    src={`https://cyberhuntress.mypinata.cloud/ipfs/QmWApVwer2onmLqZRMjJfeSfHiNHXkehCgGgsReY1Q5aWs/${index+1}.png`}
                                />
                            </ListItemAvatar>
                            <ListItemText sx={{color: 'white'}} id={labelId} primary={`Airport ${value.code}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </AirContainer>
    );
}

export default Airports;
