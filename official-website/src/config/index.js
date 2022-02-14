const env = process.env.REACT_APP_ENV;

let config = {
    baseURL: "https://Sarah-Specialist.github.io/my-official-website/"
}

switch(env.toUpperCase()) {
    case "STAGE":
        config.baseURL = "https://Sarah-Specialist.github.io/my-official-website/"
    break;
    case "PRODUCTION":{
        config.baseURL = "https://Sarah-Specialist.github.io/my-official-website/"
    break;
    }
}
export default config;