import React, { useState, useEffect } from "react";
import axios from 'axios';
import './ListCovid.scss'
const ListCovid = () => {
    const [covidData, setCovidData] = useState([]);
    const [loading, setLoading] = useState(true);
    //componentDidMount

    useEffect(() => {
        try {
            async function fetchData() {
                let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z');

                let data = (res && res.data) ? res.data : []
                if (data && data.length > 0) {
                    setCovidData(res.data);
                    setLoading(false);
                }
            }
            fetchData();
        } catch (e) {
            console.log(e)
        }
    }, []);


    return (
        <div>
            <table id="customers">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Active</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {loading === false && covidData && covidData.length > 0 &&
                        covidData.map((item, index) => {
                            return (

                                <tr key={item.ID} >
                                    <td>{index}</td>
                                    <td>{item.Date}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Deaths}</td>
                                </tr>

                            )
                        })}

                </tbody>
            </table>
        </div >
    )
}
export default ListCovid