// Nombres de acuerdo al estandar de React
// https://medium.com/how-to-react/using-env-file-in-react-js-b2714235e77e
export const API_BASE_URL =
process.env.REACT_APP_API_BASE_URL || "http://34.193.82.78:8080";
export const PUBLIC_URL =
process.env.REACT_APP_PUBLIC_URL || "http://34.193.82.78:3000";
export const API_FLASK_URL =
process.env.REACT_APP_API_FLASK_URL || "http://34.193.82.78:5000";