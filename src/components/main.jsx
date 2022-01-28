import React from 'react'
import ReactDom from 'react-dom';
import App from "../App";
import { getFirestoreApp } from '../firebase/dbConfig';


getFirestoreApp()

ReactDom.render(
    
    <App/>,
    
    document.getElementById('root')
)