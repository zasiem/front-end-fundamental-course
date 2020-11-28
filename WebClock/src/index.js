import moment from 'moment';
import $ from 'jquery';

import './style/style.css';

import '../component/AppName.js';
import '../component/Clock.js';

const displayTime = () => {
    moment.locale('id');
    $("#time").text(moment().format("LTS"));
    $('#date').text(moment().format("LL"));
}

const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000);
}

updateTime();

