import { combineReducers } from 'redux';

const activities = (state = [], action) => {
  if(action.type === "LOAD_ACTIVITIES") {
    return action.payload;
  }
  return state;
}
const bookNow = (state = [], action) => {
  if(action.type === "LOAD_BOOKNOW") {
    return action.payload;
  }
  return state;
}
const breweries = (state = {}, action) => {
  if(action.type === "LOAD_BREWERIES") {
    return action.payload;
  }
  return state;
}
const events = (state = [], action) => {
  if(action.type === "LOAD_EVENTS") {
    return action.payload;
  }
  return state;
}
const photos = (state = [], action) => {
  if(action.type === "LOAD_PHOTOS") {
    return action.payload;
  }
  return state;
}
const propertyDetail = (state = [], action) => {
  if(action.type === "LOAD_PROPERTYDETAIL") {
    return action.payload;
  }
  return state;
}
const restaurants = (state = [], action) => {
  if(action.type === "LOAD_RESTAURANTS") {
    return action.payload;
  }
  return state;
}
const shops = (state = [], action) => {
  if(action.type === "LOAD_SHOPS") {
    return action.payload;
  }
  return state;
}
const spa = (state = {}, action) => {
  if(action.type === "LOAD_SPA") {
    return action.payload;
  }
  return state;
}
const testimonialObj = (state = [], action) => {
  if(action.type === "LOAD_TESTIMONIALOBJ") {
    return action.payload;
  }
  return state;
}
const theatre = (state = {}, action) => {
  if(action.type === "LOAD_THEATRE") {
    return action.payload;
  }
  return state;
}

const allReducers = combineReducers({
  activities, bookNow, breweries, events, photos, propertyDetail, restaurants, shops, spa, testimonialObj, theatre
});

export default allReducers;
