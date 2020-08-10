import React, {useState, useEffect} from "react";
import {fetchDailyData} from "../../api"
import {Line, Bar} from "react-chartjs-2"

import styles from "./Chart.module.css"

function Chart(props) {

    const {data, country} = props;

    const [dailyData, setDailyData]  = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI()
    }, [])

    //labels 

    const lineChart = (
        dailyData.length && (
            <Line 
                data={{
                    labels: dailyData.map(({date}) => date),
                    datasets: [{
                        data: dailyData.map(({confirmed}) => confirmed),
                        label: 'Infected',
                        borderColor: "#11cbd7",
                        fill: true
                    }, {
                        data: dailyData.map(({deaths}) => deaths),
                        label: 'Deaths',
                        borderColor: "red",
                        backgroundColor: '#fa4659',
                        fill: true 
                    }]
                }}
            />
        ) 
    )
    const barChart = (
        data.confirmed && (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            "#11cbd7",
                            "#f0fff3",
                            "#fa4659",

                        ],
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: `Current status in ${country}`}
                }}
            />
        )
    )

    return (<div className={styles.container}>
                {country ? barChart : lineChart}
            </div>)
}

export default Chart;