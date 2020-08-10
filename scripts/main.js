"use strict";

AOS.init();

const tSalons = document.querySelector(".t-salons");
const tMasters = document.querySelector(".t-masters");
const wrapperSalon = document.querySelector(".wrapper-salon");
const wrapperMaster = document.querySelector(".wrapper-master");

tSalons.addEventListener("click", () =>{
    tSalons.classList.add("active");
    wrapperSalon.classList.remove("hide");
    tMasters.classList.remove("active");
    wrapperMaster.classList.add("hide");
});

tMasters.addEventListener("click", () =>{
    tMasters.classList.add("active");
    wrapperMaster.classList.remove("hide");
    tSalons.classList.remove("active");
    wrapperSalon.classList.add("hide");
});

function countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;
  
    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();
  
    if (isNaN(dateEnd)) {
      return;
    }
  
    timer = setInterval(calculate, 1000);
  
    function calculate() {
      var dateStart = new Date();
      var dateStart = new Date(dateStart.getUTCFullYear(),
        dateStart.getUTCMonth(),
        dateStart.getUTCDate(),
        dateStart.getUTCHours(),
        dateStart.getUTCMinutes(),
        dateStart.getUTCSeconds());
      var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
  
      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = (timeRemaining % 86400);
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = (timeRemaining % 3600);
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);
        seconds = parseInt(timeRemaining);
  
  
        document.getElementById("days").innerHTML = parseInt(days, 10);
        document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
        document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
      }
    }
  
    function display(days, hours, minutes, seconds) {}
  }
   
  countdown ('09/15/2020 00:00:00 AM');


  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });