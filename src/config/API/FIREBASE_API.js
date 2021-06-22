import axios from 'axios'
import { FIREBASE_URL } from './API_URL';

const FIREBASE_API = axios.create({
    baseURL: FIREBASE_URL,
});



export default FIREBASE_API;