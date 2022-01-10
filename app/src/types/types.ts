export interface Location {
    title: string
    location_type: string
    latt_long: number
    time: Date
    sun_rise: Date
    sun_set: Date
    timezone_name: string
    parent: {
        title: string
        location_type: string
        latt_long: number
        woeid: number
    }
    consolidated_weather: ConsolidatedWeather[]
    sources: {
        title: string
        url: string
    }[]
}

export interface ConsolidatedWeather {
    id: number
    applicable_date: Date
    weather_state_name: string
    weather_state_abbr: string
    wind_speed: number
    wind_direction: number
    wind_direction_compass: string
    min_temp: number
    max_temp: number
    the_temp: number
    air_pressure: number
    humidity: number
    visibility: number
    predictability: number
}

export interface LocationSearch {
    title: string
    location_type: string
    latt_long: number
    woeid: number
    distance:number
}