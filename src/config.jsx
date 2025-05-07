/**
 * ClimateVector uses climate data from the public API at https://climatemonitor.info/.
 * It is public resource and no need of API key for access.
 * 
 * The API is versioned, and the current root endpoint is:
 *      https://climatemonitor.info/api/public/v1 defined as <ROOT_ENDPOINT>.
 *
 * Depending on the dataset chosen (e.g. CO2, ocean) which are called factor, we can fetch 
 * climate data in different time resolutions (e.g. daily, monthly) which are called query. For some factors there are two 
 * version of data the global average(e.g. annual_gl) and Mauna Loa average(e.g. annual_ml)
 * 
 *  There are currently 7 available climate factors for us to use
 *        Levels of 4 greenhouse gases: CO₂, CH₄, N₂O, SF₆
 *        Global temperature anomalies
 *        Ocean mass anomalies
 *        Glacier/ice mass loss
 * 
 * Usage:   <ROOT_ENDPOINT>/:{factor}/:{query}
 * Example: https://climatemonitor.info/api/public/v1/co2/annual_gl
 */

export const ROOT_END_POINT = "https://climatemonitor.info/api/public/v1";


export const OWM_AIR_POLLUTION = "https://api.openweathermap.org/data/2.5";
export const OWM_GEO_LOCATION = "https://api.openweathermap.org/geo/1.0";
