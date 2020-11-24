// import { data, is_available } from './state.js';
const {data,is_available} = require('./state.js');

const greeting = (data, status) => {
    if (status){
        data.map(person => {
            console.log(`hai, nama saya ${person.name}. Saya ${person.gender}`)
        })
    }else{
        console.log('Status tidak available')
    }
} 

greeting(data, is_available);