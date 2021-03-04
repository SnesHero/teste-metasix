import { useEffect, useState } from 'react';
import Axios from 'axios';
import "./FAQ";
import "./FAQ_perguntas.js";

const setData = ('');


function APIdata(){
    useEffect(() => {
        Axios.get('https://poc.metasix.solutions/parse/classes/FAQ',
        { headers: {'X-Parse-Application-Id': 'br.com.metasix.poc'}}).then((res) => {
          setData(res.data);
          console.log('pirocas');
        });
      }, []);
}

export default APIdata;