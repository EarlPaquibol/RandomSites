import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData  =  async (country) => {
    let changableURL = url;
    if (country){
        changableURL = `${url}/countries/${country}`
    }
    try {
        // const response = await axios.get(url)
        const {data} = await axios.get(changableURL)

        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }

        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData;
    } catch (error) {

    }
}

export const fetchCountries = async () => {
    try {
        const {data} = await axios.get(`${url}/countries`);
        const {countries} = data;
        // console.log(countries[0])
        const modifiedData = countries.map((country) => (country.name))

        return modifiedData;
    } catch (error) {
        
    }
}