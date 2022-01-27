import { put, takeLatest, all, takeEvery } from "redux-saga/effects";

function* fetchWeather(action) {
  try {
    if (action.payload !== "" && action.payload.length > 3) {
      console.log("city", action.payload);

      const realtimeData = yield fetch(
        `https://api.weatherapi.com/v1/current.json?key=04938d6b73de4f07a5c43913201811&q=${action.payload}`
      ).then((response) => response.json());

      yield put({ type: "WEATHER_RECEIVED", payload: realtimeData });
    }
    
  } catch (error) {
    console.log("fetch time error", error);
  }
}

function* actionWatcher() {
  yield takeEvery("GET_WEATHER", fetchWeather);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
