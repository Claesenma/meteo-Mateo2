const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
var dag = urlParams.get('dag')
if (dag == null) {
  var dag = 1;
}
var stad = urlParams.get('stad')
if (stad == null) {
  var stad = "Leuven";
}

var taal = urlParams.get('taal')
if (taal == null) {
  var taal = "nl";
}

var eenheid = urlParams.get('eenheid')
if (eenheid == null) {
  var eenheid = "C";
}

const days_nl = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
const days_fr = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const days_en = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saterday"];
const days_sp = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

var french = document.getElementById('fr_click');
var english = document.getElementById('en_click');
var dutch = document.getElementById('nl_click');
var spanish = document.getElementById('sp_click');
var eenheid_F = document.getElementById('F_btn');
var eenheid_C = document.getElementById('C_btn');
var fr_txt = document.querySelectorAll('.fr');
var en_txt = document.querySelectorAll('.en');
var nl_txt = document.querySelectorAll('.nl');
var sp_txt = document.querySelectorAll('.sp');
var nb_fr = fr_txt.length;
var nb_en = en_txt.length;
var nb_nl = nl_txt.length;
var nb_sp = sp_txt.length;

if (eenheid=="C") {
  eenheid_C.classList.toggle('current_eenheid');
}
if (eenheid=="F") {
  eenheid_F.classList.toggle('current_eenheid');
}

if (taal=="nl") {
  days_list2 = days_nl;
  dutch.classList.toggle('current_lang');
  var taal1 = dutch;
  var taal2 = french;
  var taal3 = english;
  var taal4 = spanish;
}
if (taal=="en") {
  days_list2 = days_en;
  english.classList.toggle('current_lang');
  var taal3 = dutch;
  var taal2 = french;
  var taal1 = english;
  var taal4 = spanish;
}
if (taal=="fr") {
  days_list2 = days_fr;
  french.classList.toggle('current_lang');
  var taal2 = dutch;
  var taal1 = french;
  var taal3 = english;
  var taal4 = spanish;
}
if (taal=="sp") {
  days_list2 = days_sp;
  spanish.classList.toggle('current_lang');
  var taal4 = dutch;
  var taal2 = french;
  var taal3 = english;
  var taal1 = spanish;
}

function search(eenheid) {
  var url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + stad + "?unitGroup=metric&include=hours&iconSet=icons2&key=HNHYLC3NQ2PBZQUN3C965WFVW"

  fetch(url)
    .then(response => {
      // indicates whether the response is successful (status code 200-299) or not
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      return response.json()
    })
    .then(data => {
      console.log(data.count)
      console.log(data.products)

      window.data = data

      show_data(window.data, eenheid)
  })
  .catch(error => console.log(error))
}

function show_data(data, eenheid) {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]
  const days = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

  const data2 = data.days[dag-1]

  for (i = 0; i < 24; i++) {
    const today = new Date()
    const day = new Date(today)
    day.setDate(day.getDate() + i)
    const weekday = day.getDay()
    const string = data2.hours[i].datetime

    if (eenheid=="C") {
      var string2 = data2.hours[i].temp + "°C";
      var string3 = data2.hours[i].feelslike + "°C";
    }
    if (eenheid=="F") {
      var string2 = (Math.round(((data2.hours[i].temp * 1.8) + 32) * 100) / 100) + "°F";
      var string3 = (Math.round(((data2.hours[i].feelslike * 1.8) + 32) * 100) / 100) + "°F";
    }

    document.getElementById("hour" + numbers[i] + "-img1").src = "images/" + data2.hours[i].icon + ".png";
    document.getElementById("hour" + numbers[i] + "-img1").alt = data2.hours[i].icon;
    document.getElementById("hour" + numbers[i] + "-span1").innerHTML = string;
    document.getElementById("hour" + numbers[i] + "-span2").innerHTML = string2;

    var feels_like = document.querySelectorAll("#hour" + numbers[i] + "-span3")
    for (m = 0; m < 4; m++) {
      feels_like[m].innerHTML = string3;
    }
  }

  document.getElementById("home-btn1").href = "index.html?stad="+data.address+"&taal="+taal+"&eenheid="+window.eenheid;

  var p1 = document.querySelectorAll("#p1")
  var p1_2 = document.querySelectorAll("#p1-2")
  var p2 = document.querySelectorAll("#p2")
  var p3 = document.querySelectorAll("#p3")
  var p4 = document.querySelectorAll("#p4")

  var today_btn = document.querySelectorAll("#today-btn1");
  var maps_btn = document.querySelectorAll("#maps-btn1");

  for (k = 0; k < 4; k++) {
    today_btn[k].href = "details.html?dag=1&stad="+data.address+"&taal="+taal+"&eenheid="+window.eenheid;
    maps_btn[k].href = "kaarten.html?taal="+taal+"&eenheid="+window.eenheid;
    p1[k].innerHTML = data.address;
    p1_2[k].innerHTML = data2.datetime.slice(8, 10) + "/" + data2.datetime.slice(5, 7) + "/" + data2.datetime.slice(0, 4);
    p2[k].innerHTML = data2.sunrise;
    p3[k].innerHTML = data2.sunset;
    p4[k].innerHTML = data2.uvindex;
      }
}

search(eenheid)


eenheid_F.addEventListener('click', function() {
    change_eenheid(eenheid_F,eenheid_C);
}, false);

eenheid_C.addEventListener('click', function() {
    change_eenheid(eenheid_C,eenheid_F);
}, false);


french.addEventListener('click', function() {
    langue(french,english,dutch,spanish);
}, false);

english.addEventListener('click', function() {
    langue(english,french,dutch,spanish);
}, false);

dutch.addEventListener('click', function() {
    langue(dutch,french,english,spanish);
}, false);

spanish.addEventListener('click', function() {
    langue(spanish,english,french,dutch);
}, false);

function langue(langueOn,langueOff1,langueOff2,langueOff3){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');

        if (langueOff1.classList.contains('current_lang')) {
            langueOff1.classList.toggle('current_lang');}

        if (langueOff2.classList.contains('current_lang')) {
            langueOff2.classList.toggle('current_lang');}

        if (langueOff3.classList.contains('current_lang')) {
            langueOff3.classList.toggle('current_lang');}
    }
    if(langueOn.innerHTML == 'Français'){
        afficher(fr_txt, nb_fr);
        cacher(en_txt, nb_en,nl_txt, nb_nl,sp_txt, nb_sp);
        var days_list = days_fr;
        var taal2 = "fr";
    }
    else if(langueOn.innerHTML == 'English'){
        afficher(en_txt, nb_en);
        cacher(fr_txt, nb_fr,nl_txt, nb_nl,sp_txt, nb_sp);
        var days_list = days_en;
        var taal2 = "en";
    }
    else if(langueOn.innerHTML == 'Nederlands'){
        afficher(nl_txt, nb_nl);
        cacher(en_txt, nb_en,fr_txt, nb_fr,sp_txt, nb_sp);
        var days_list = days_nl;
        var taal2 = "nl";
    }
    else if(langueOn.innerHTML == 'Español'){
        afficher(sp_txt, nb_sp);
        cacher(en_txt, nb_en,nl_txt, nb_nl,fr_txt, nb_fr);
        var days_list = days_sp;
        var taal2 = "sp";
    }

    var data = window.data;
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]

    document.getElementById("home-btn1").href = "index.html?stad="+data.address+"&taal="+taal2+"&eenheid="+window.eenheid;

    var today_btn = document.querySelectorAll("#today-btn1");
    var maps_btn = document.querySelectorAll("#maps-btn1");

    for (k = 0; k < 4; k++) {
      today_btn[k].href = "details.html?dag=1&stad="+data.address+"&taal="+taal2+"&eenheid="+window.eenheid;
      maps_btn[k].href = "kaarten.html?taal="+taal2+"&eenheid="+window.eenheid;
    }
}

function change_eenheid(eenheidOn,eenheidOff){
  if (!eenheidOn.classList.contains('current_eenheid')) {
      eenheidOn.classList.toggle('current_eenheid');
      eenheidOff.classList.toggle('current_eenheid');
  }

  if(eenheidOn.innerHTML == '°C'){
    window.eenheid = "C"
  }
  else if(eenheidOn.innerHTML == '°F'){
    window.eenheid = "F"
  }

  show_data(window.data, window.eenheid)
}

function langue2(langueOn,langueOff1,langueOff2,langueOff3){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');

        if (langueOff1.classList.contains('current_lang')) {
            langueOff1.classList.toggle('current_lang');}

        if (langueOff2.classList.contains('current_lang')) {
            langueOff2.classList.toggle('current_lang');}

        if (langueOff3.classList.contains('current_lang')) {
            langueOff3.classList.toggle('current_lang');}
    }
    if(langueOn.innerHTML == 'Français'){
        afficher(fr_txt, nb_fr);
        cacher(en_txt, nb_en,nl_txt, nb_nl,sp_txt, nb_sp);
    }
    else if(langueOn.innerHTML == 'English'){
        afficher(en_txt, nb_en);
        cacher(fr_txt, nb_fr,nl_txt, nb_nl,sp_txt, nb_sp);
    }
    else if(langueOn.innerHTML == 'Nederlands'){
        afficher(nl_txt, nb_nl);
        cacher(en_txt, nb_en,fr_txt, nb_fr,sp_txt, nb_sp);
    }
    else if(langueOn.innerHTML == 'Español'){
        afficher(sp_txt, nb_sp);
        cacher(en_txt, nb_en,nl_txt, nb_nl,fr_txt, nb_fr);
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'inline';
    }
}
function cacher(txt1,nb1,txt2,nb2,txt3,nb3){
    for(var i=0; i < nb1; i++){
        txt1[i].style.display = 'none';
    }
    for(var i=0; i < nb2; i++){
        txt2[i].style.display = 'none';
    }
    for(var i=0; i < nb3; i++){
        txt3[i].style.display = 'none';
    }
}
function init(){
    langue2(taal1,taal2,taal3,taal4);
}
init();
