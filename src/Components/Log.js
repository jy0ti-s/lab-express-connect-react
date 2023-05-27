import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import Log from "./Log";

export default function Logs() {
  const [logs, setLogs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3333/logs')
      .then((res) => {
        setLogs(res.data);
        setLoaded(true);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div></div>;
}
