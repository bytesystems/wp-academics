import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {convertXML} from "simple-xml-to-json";
import {XMLParser} from "fast-xml-parser"
import {AcademicsDisplay} from "./components/academics-display";

function App() {

    const [data, setData] = useState({loading: true, advertisements: [],count: 0, error: false})

    useEffect(() => {

        if(window.academics_jobs.advertisement && window.academics_jobs['@attributes'].total)
        {
            setData(
                {
                    ...data,
                    loading: false,
                    advertisements: window.academics_jobs.advertisement,
                    count: window.academics_jobs['@attributes'].total
                }
            )
        }
        else {
            setData({
                ...data,
                error: true
            })
        }

    },[])

    return (
        <AcademicsDisplay data={data} />
    );
}

export default App;
