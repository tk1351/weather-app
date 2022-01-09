import {Location} from "../types/types";
import axios from "axios";
import {TOKYO_WOEID} from "./woeid";

export const API_PREFIX_URL = 'https://www.metaweather.com/api'

export const createWeatherStateIcon = (abbreviation: string): string => {
    return `https://www.metaweather.com/static/img/weather/${abbreviation}.svg`
}

export const fetchWeather = async (): Promise<Location> => {
    const { data } = await axios.get<Location>(`/api/location/${TOKYO_WOEID}/`)
    return data
}

export const defaultLocation: Location = {
    title: '',
    location_type: '',
    latt_long: 0,
    time: new Date(),
    sun_rise: new Date(),
    sun_set: new Date(),
    timezone_name: '',
    parent: {
        title: '',
        location_type: '',
        latt_long: 0,
        woeid: 0,
    },
    consolidated_weather: [{
        id: 0,
        applicable_date: new Date(),
        weather_state_name: '',
        weather_state_abbr: '',
        wind_speed: 0,
        wind_direction: 0,
        wind_direction_compass: '',
        min_temp: 0,
        max_temp: 0,
        the_temp: 0,
        air_pressure: 0,
        humidity: 0,
        visibility: 0,
        predictability: 0,
    }],
    sources: [{
        title: '',
        url: '',
    }]
}