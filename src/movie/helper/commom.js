import jwt from 'jsonwebtoken';

const TOKEN_KEY = 'react2012';

const saveToken = (token) => {
    //save localStorage
    if(token !==null || token !==''){
        localStorage.setItem('token_login',token);
    }
} 

const getTokenLocalStorage = () => {
    let token = localStorage.getItem('token_login');
    return token;
}

const removeToken = () => {
    localStorage.removeItem('token_login');
}

const dercyptTokenLocalStorage = () => {
    let token = getTokenLocalStorage();
    let dercyptToken = null;
    if(token !== null && token !== ''){
        //tien hanh giai ma token
        dercyptToken = jwt.verify(token, TOKEN_KEY);
        if(dercyptToken !== null && dercyptToken !== ''){
            return dercyptToken;
        }
        return null;
    }
    return dercyptToken;
}

const isEmptyObject = (obj) => {
    for(let prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
  }

const isAuthentcated = () => {
    let token = dercyptTokenLocalStorage();
    if(token !== null && token !== ''){
        return true;
    }
    return false;
}

const checkTrailerVideo = (videos = {}) => {
    let check = false;
    if(videos.hasOwnProperty('results')){
        if(videos.results.length > 0){
            check = true;
        }
    }
    return check;
}

export const helper = {
    checkTrailerVideo,
    isEmptyObject,
    saveToken,
    dercyptTokenLocalStorage,
    removeToken,
    isAuthentcated 
}