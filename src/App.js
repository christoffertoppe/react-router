
import React from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'

import Add from './components/Add'
import Home from './components/Home'
import List from './components/List'
import axios from 'axios';
import { useState, useEffect } from 'react'




const App = () => {

    const [events, setEvents] = useState([]);
    useEffect(()=> {
        GetList()
    },[])


    function GetList() {
        axios.get('http://localhost:3002/notes').then(response => {
            const events = response.data
            console.log(events)
            setEvents(events)
        })
    }




    const padding = {
        padding: 5
    }

    return (
        <div className="container">
            <Router>
                <div id="valikko">
                    <Link style={padding} to="/">home</Link>
                    <Link style={padding} to="/add">add</Link>
                    <Link style={padding} to="/list">list</Link>
                </div>

                <Switch>
                    <Route path="/add">
                        <Add events={setEvents}/>
                    </Route>
                    <Route path="/list">
                        <List events={events}/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

                <div>
                    <i>Esimerkkivalikko </i>
                    <i>perustuu HY:n fullstackopen-kurssimateriaaliin</i>
                </div>
            </Router>
        </div>
    )
}

export default App
