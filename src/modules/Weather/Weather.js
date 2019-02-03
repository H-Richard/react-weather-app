import React from "react";


const Weather = (props) => {
  return(
    <div>
      <h1>Weather Component</h1>
      { props.city && props.country && <p> Location: { props.city }, { props.country} </p> }
      { props.temperature && <p> Temperature: { props.temperature } &#8451; </p> }
      { props.humidity && <p> Humidity: { props.humidity } </p>}
      { props.description && <p> Conditions: { props.description } </p>}
      { props.wind && props.wind_deg && <p> Wind Conditions: Speed: { props.wind } km/h,  Direction: { props.wind_deg } &#176; </p>}
      { props.error && <p> {props.error} </p>}
    </div>
  );
}

export default Weather;
