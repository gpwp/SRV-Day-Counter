var currentClock = document.getElementById("currentClock");
var startClock = document.getElementById("StartDay");
var dischargeClock = document.getElementById("DischargeDay");
var diffClock = document.getElementById("datDiff");


function clock(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var weekday = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var week = ['일', '월', '화', '수', '목', '금', '토'];

    currentClock.innerText = `현재 시간 : ${year} ${month+1}월 ${day}일 ${week[weekday]}요일 ` + `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute }`  : minute }:${second < 10 ? `0${second }`  : second }`;
}

function discharge_clock(){
    var date = new Date('2022-11-17T09:00:00');
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var weekday = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var week = ['일', '월', '화', '수', '목', '금', '토'];

    dischargeClock.innerText = `제대일  : ${year} ${month+1}월 ${day}일 ${week[weekday]}요일 ` + `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute }`  : minute }:${second < 10 ? `0${second }`  : second }`;
}

function start_clock(){
    var date = new Date('2020-12-18T18:00:00');
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var weekday = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var week = ['일', '월', '화', '수', '목', '금', '토'];

    // console.log(date);
    startClock.innerText = `군복무 시작 : ${year} ${month+1}월 ${day}일 ${week[weekday]}요일 ` + `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute }`  : minute }:${second < 10 ? `0${second }`  : second }`;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function date_diff(){
    var sdt = new Date();
    var edt = new Date('2022-11-17T09:00:00');
    var dateDiff = Math.ceil((edt.getTime()-sdt.getTime())/(1000));

    diffClock.innerText = numberWithCommas(dateDiff) + ' 초'; 
}


function init(){
    clock();
    start_clock();
    discharge_clock();
    date_diff();
    setInterval(clock, 1000);
    setInterval(date_diff, 1000);
}

init();