let Data = [];

const GetDataReducer = (state = [], action) => {
  switch (action.type) {
    // case "GET_WEATHER": {
    //   console.log("GET_WEATHER reducer run"); 
    //   return Data;
    // }

    case "WEATHER_RECEIVED": {
      console.log("WEATHER_RECEIVED reducer run");
      Data = action.payload; 
      return Data;
    }

    default:
      return Data;
  }
};

export default GetDataReducer;
