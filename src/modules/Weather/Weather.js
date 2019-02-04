import React from "react";


const Weather = (props) => {
  return(
    <div className="weather__info">
      {
         props.city && props.country &&
         <p className="weather__key">
         Location:
         <span className="weather__value"> { props.city }, { props.country} </span>
         </p>
      }
      {
         props.temperature &&
         <p className="weather__key">
         Temperature:
         <span className="weather__value"> { props.temperature } &#8451; </span>
        </p>
      }
      {
         props.humidity &&
         <p className="weather__key">
         Humidity: <span className="weather__value">
          { props.humidity }
         </span>

         </p>
      }
      {
         props.description && <p className="weather__key">
         Conditions:
         <span className="weather__value"> { props.description }
         </span>
        </p>
      }
      {
         props.wind && props.wind_deg && <p className="weather__key">
         Wind Conditions:
         Speed: <span className="weather__value"> { props.wind } km/h</span>,
         Direction: <span className="weather__value">
        { props.wind_deg } &#176; </span> </p>
      }
      {
         props.error && <p className="weather__error"> {props.error} </p>
      }
    </div>
  );
}

export default Weather;
