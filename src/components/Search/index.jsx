import React from "react";
// import { DatePicker, Input, Button, message } from 'antd';
import './style.css';
import Navbar from '../navbar'


const search = ({ setCarrier, setDate, setFlightNumber, flightNumber, date, carrier }) => {

  const onFlightChange = (e) => {
    setFlightNumber(e.target.value);;

  };

  const onCarrierChange = (e) => {
    setCarrier(e.target.value);
  }

  const onChangeDate = (date, dateString) => {
    setDate(dateString)
  }

  var dateFormat = date.replace('-', '/');
  var refineFormat = dateFormat.replace('-', '/');
  console.log(refineFormat);
  date = refineFormat;
  const fetchData = (e) => {
    if (!carrier || !flightNumber || !date) {
      // message.error('All the Inputs are Required');
      return;
    }
    else {
      const key = 'updatable';
      // message.loading({ content: 'Fetching...', key });
    }
    e.preventDefault();
    // https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${carrier}/${flightNumber}/arr/${date}
    const axios = require('axios');
    axios({
      method: 'get',
      url: `https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${carrier}/${flightNumber}/arr/${date}`,
      headers: {
        'appId': '4a25e0eb',
        'appKey': 'e6254fb07950dbe2ebe2d87baf740679',
        'ACCESS-CONTROL-ALLOW-ORIGIN': '*'
      },
      responseType: 'json',
      credentials: 'include',

    })
      // .then(data = data.JSON())
      .then(data => {
        const key = 'updatable';
        setTimeout(() => {
          // message.success({ content: 'Fetched', key, duration: 10 });
        }, 3000);
        console.log("data is here", data);
      });
  };


  return (<div>
    <Navbar />
    <section className="d-flex searchbar-wrapper">
      <div>
        {/* <Input placeholder="Carrier Eg: EZY" value={carrier} size={10} onChange={onCarrierChange} className="ft-sm-inputs" /> */}
      </div>
      {/* <Input placeholder="Flight Number Eg: 2630" size={20} value={flightNumber} onChange={onFlightChange} className="ft-inputs" /> */}
      {/* <DatePicker onChange={onChangeDate} className="ft-inputs wth-200" /> */}
      {/* <Button type="primary" className="ht-45 br-0" onClick={fetchData}>
        Track Status
      </Button> */}
    </section>
    <div>
      {/* {data.flightStatuses[0].status}   */}
    </div>
  </div>

  );


};

export default search;




