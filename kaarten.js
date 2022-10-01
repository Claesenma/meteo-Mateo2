const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

var taal = urlParams.get('taal')
if (taal == null) {
  var taal = "nl";
}

var eenheid = urlParams.get('eenheid')
if (eenheid == null) {
  var eenheid = "C";
}

const days2_nl = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
const days2_fr = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const days2_en = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saterday"];
const days2_sp = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const days_nl = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];
const days_en = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const days_fr = ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"];
const days_sp = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];

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
  days_list3 = days2_nl
  dutch.classList.toggle('current_lang');
  var taal1 = dutch;
  var taal2 = french;
  var taal3 = english;
  var taal4 = spanish;
}
if (taal=="en") {
  days_list2 = days_en;
  days_list3 = days2_en
  english.classList.toggle('current_lang');
  var taal3 = dutch;
  var taal2 = french;
  var taal1 = english;
  var taal4 = spanish;
}
if (taal=="fr") {
  days_list2 = days_fr;
  days_list3 = days2_fr
  french.classList.toggle('current_lang');
  var taal2 = dutch;
  var taal1 = french;
  var taal3 = english;
  var taal4 = spanish;
}
if (taal=="sp") {
  days_list2 = days_sp;
  days_list3 = days2_sp
  spanish.classList.toggle('current_lang');
  var taal4 = dutch;
  var taal2 = french;
  var taal3 = english;
  var taal1 = spanish;
}


locaties = ["Brugge", "Helchteren", "Brussel", "Liege", "Wideumont"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


function getData1() {
  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + locaties[0] + "?unitGroup=metric&include=hours&iconSet=icons2&key=HNHYLC3NQ2PBZQUN3C965WFVW"
  fetch(url)
    .then(response => {
      // indicates whether the response is successful (status code 200-299) or not
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      return response.json()
      document.write("error")
    })
    .then(data => {
      console.log(data.count)
      console.log(data.products)
      console.log(data)
      window.data1 = data
    })
    .catch(error => console.log(error))
}
function getData2() {
  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + locaties[1] + "?unitGroup=metric&include=hours&iconSet=icons2&key=HNHYLC3NQ2PBZQUN3C965WFVW"
  fetch(url)
    .then(response => {
      // indicates whether the response is successful (status code 200-299) or not
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      return response.json()
      document.write("error")
    })
    .then(data => {
      console.log(data.count)
      console.log(data.products)
      console.log(data)
      window.data2 = data
    })
    .catch(error => console.log(error))
}
function getData3() {
  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + locaties[2] + "?unitGroup=metric&include=hours&iconSet=icons2&key=HNHYLC3NQ2PBZQUN3C965WFVW"
  fetch(url)
    .then(response => {
      // indicates whether the response is successful (status code 200-299) or not
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      return response.json()
      document.write("error")
    })
    .then(data => {
      console.log(data.count)
      console.log(data.products)
      console.log(data)
      window.data3 = data
    })
    .catch(error => console.log(error))
}
function getData4() {
  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + locaties[3] + "?unitGroup=metric&include=hours&iconSet=icons2&key=HNHYLC3NQ2PBZQUN3C965WFVW"
  fetch(url)
    .then(response => {
      // indicates whether the response is successful (status code 200-299) or not
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      return response.json()
      document.write("error")
    })
    .then(data => {
      console.log(data.count)
      console.log(data.products)
      console.log(data)
      window.data4 = data
    })
    .catch(error => console.log(error))
}
function getData5() {
  const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + locaties[4] + "?unitGroup=metric&include=hours&iconSet=icons2&key=HNHYLC3NQ2PBZQUN3C965WFVW"
  fetch(url)
    .then(response => {
      // indicates whether the response is successful (status code 200-299) or not
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }
      return response.json()
      document.write("error")
    })
    .then(data => {
      console.log(data.count)
      console.log(data.products)
      console.log(data)
      window.data5 = data
    })
    .catch(error => console.log(error))
}


function show_day_data(day_num) {
  window.day_num2 = day_num
  const today = new Date()
  const day = new Date(today)
  day.setDate(day.getDate() + day_num)
  const weekday = day.getDay()

  var weekday2 = days_list3[weekday]
  const string = weekday2 + " " + data1.days[day_num].datetime.slice(8, 10) + "/" + data1.days[day_num].datetime.slice(5, 7) + "/" + data1.days[day_num].datetime.slice(0, 4)

  if (window.eenheid=="C") {
    var temp1 = data1.days[day_num].tempmax + "°C"
    var temp2 = data2.days[day_num].tempmax + "°C"
    var temp3 = data3.days[day_num].tempmax + "°C"
    var temp4 = data4.days[day_num].tempmax + "°C"
    var temp5 = data5.days[day_num].tempmax + "°C"
  }
  if (window.eenheid=="F") {
    var temp1 = ((data1.days[day_num].tempmax*1.8)+32) + "°F"
    var temp2 = ((data2.days[day_num].tempmax*1.8)+32) + "°F"
    var temp3 = ((data3.days[day_num].tempmax*1.8)+32) + "°F"
    var temp4 = ((data4.days[day_num].tempmax*1.8)+32) + "°F"
    var temp5 = ((data5.days[day_num].tempmax*1.8)+32) + "°F"
  }

  const img1_1 = data1.days[day_num].icon
  const img1_2 = "images/" + img1_1 + ".png"
  const img2_1 = data2.days[day_num].icon
  const img2_2 = "images/" + img2_1 + ".png"
  const img3_1 = data3.days[day_num].icon
  const img3_2 = "images/" + img3_1 + ".png"
  const img4_1 = data4.days[day_num].icon
  const img4_2 = "images/" + img4_1 + ".png"
  const img5_1 = data5.days[day_num].icon
  const img5_2 = "images/" + img5_1 + ".png"

  document.getElementById("title1").innerHTML = string;

  document.getElementById("img1").src = img1_2;
  document.getElementById("img2").src = img2_2;
  document.getElementById("img3").src = img3_2;
  document.getElementById("img4").src = img4_2;
  document.getElementById("img5").src = img5_2;
  document.getElementById("img1").alt = img1_1;
  document.getElementById("img2").alt = img2_1;
  document.getElementById("img3").alt = img3_1;
  document.getElementById("img4").alt = img4_1;
  document.getElementById("img5").alt = img5_1;

  document.getElementById("span1").innerHTML = temp1;
  document.getElementById("span2").innerHTML = temp2;
  document.getElementById("span3").innerHTML = temp3;
  document.getElementById("span4").innerHTML = temp4;
  document.getElementById("span5").innerHTML = temp5;

  for (i = 0; i < 15; i++) {
    const today = new Date()
    const day = new Date(today)
    day.setDate(day.getDate() + i)
    const weekday = day.getDay()
    const date = days_list2[weekday] + " " + data1.days[i].datetime.slice(8, 10) + "/" + data1.days[i].datetime.slice(5, 7) + "/" + data1.days[i].datetime.slice(0, 4)

    document.getElementById("btn" + numbers[i]).innerHTML = date;
    document.getElementById("btn" + numbers[i]).href = "#";
  }
}

myFunction(0)

async function myFunction(num) {
  getData1();
  getData2();
  getData3();
  getData4();
  getData5();
  await delay(1000);

  for (i = 0; i < 15; i++) {
    const today = new Date()
    const day = new Date(today)
    day.setDate(day.getDate() + i)
    const weekday = day.getDay()
    const date = days_list2[weekday] + " " + data1.days[i].datetime.slice(8, 10) + "/" + data1.days[i].datetime.slice(5, 7) + "/" + data1.days[i].datetime.slice(0, 4)

    document.getElementById("btn" + numbers[i]).innerHTML = date;
    document.getElementById("btn" + numbers[i]).href = "#";
  }

  show_day_data(num);
}



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
        var days2_list = days2_fr;
        window.days_list2 = days_fr;
        window.days_list3 = days2_fr;
        var taal2 = "fr";
    }
    else if(langueOn.innerHTML == 'English'){
        afficher(en_txt, nb_en);
        cacher(fr_txt, nb_fr,nl_txt, nb_nl,sp_txt, nb_sp);
        var days_list = days_en;
        var days_list2 = days2_en;
        window.days_list2 = days_en;
        window.days_list3 = days2_en;
        var taal2 = "en";
    }
    else if(langueOn.innerHTML == 'Nederlands'){
        afficher(nl_txt, nb_nl);
        cacher(en_txt, nb_en,fr_txt, nb_fr,sp_txt, nb_sp);
        var days_list = days_nl;
        var days_list2 = days2_nl;
        window.days_list2 = days_nl;
        window.days_list3 = days2_nl;
        var taal2 = "nl";
    }
    else if(langueOn.innerHTML == 'Español'){
        afficher(sp_txt, nb_sp);
        cacher(en_txt, nb_en,nl_txt, nb_nl,fr_txt, nb_fr);
        var days_list = days_sp;
        var days_list2 = days2_sp;
        window.days_list2 = days_sp;
        window.days_list3 = days2_sp;
        var taal2 = "sp";
    }

    var data = window.data1;
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]

    document.getElementById("home-btn1").href = "index.html?taal="+taal2+"&eenheid="+window.eenheid;

    var today_btn = document.querySelectorAll("#today-btn1");
    var maps_btn = document.querySelectorAll("#maps-btn1");

    for (k = 0; k < 4; k++) {
      today_btn[k].href = "details.html?dag=1&taal="+taal2+"&eenheid="+window.eenheid;
      maps_btn[k].href = "kaarten.html?taal="+taal2+"&eenheid="+window.eenheid;
    }
    show_day_data(window.day_num2)
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

  show_day_data(window.day_num2)
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
        var taal2 = "fr";
    }
    else if(langueOn.innerHTML == 'English'){
        afficher(en_txt, nb_en);
        cacher(fr_txt, nb_fr,nl_txt, nb_nl,sp_txt, nb_sp);
        var taal2 = "en";
    }
    else if(langueOn.innerHTML == 'Nederlands'){
        afficher(nl_txt, nb_nl);
        cacher(en_txt, nb_en,fr_txt, nb_fr,sp_txt, nb_sp);
        var taal2 = "nl";
    }
    else if(langueOn.innerHTML == 'Español'){
        afficher(sp_txt, nb_sp);
        cacher(en_txt, nb_en,nl_txt, nb_nl,fr_txt, nb_fr);
        var taal2 = "sp";
    }

    document.getElementById("home-btn1").href = "index.html?taal="+taal2+"&eenheid="+window.eenheid;


    var today_btn = document.querySelectorAll("#today-btn1");
    var maps_btn = document.querySelectorAll("#maps-btn1");

    for (k = 0; k < 4; k++) {
      today_btn[k].href = "details.html?dag=1&taal="+taal2+"&eenheid="+window.eenheid;
      maps_btn[k].href = "kaarten.html?taal="+taal2+"&eenheid="+window.eenheid;
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
