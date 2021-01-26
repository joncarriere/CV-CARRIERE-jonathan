// effet navbar
window.onscroll = function () { navEffect() };
function navEffect() {
  if (document.body.scrollTop > (window.innerHeight - 56) || document.documentElement.scrollTop > (window.innerHeight - 56)) {
    document.getElementById('navBar').classList.add("navScroll");
    document.getElementById('navLeft').classList.remove("navLeftNone");
    document.getElementById('navLeft').classList.add("navLeftIn");
  } else {
    document.getElementById('navBar').classList.remove("navScroll");
    document.getElementById('navLeft').classList.remove("navLeftIn");
    document.getElementById('navLeft').classList.add("navLeftNone");
  }
}

// switch date de naissance/age section "A Propos"
function age() {
  const birth = new Date(1981, 2, 9, 12, 00);
  let dateNow = new Date();
  let elapsedTime = (dateNow - birth)
  let years = elapsedTime / (3600 * 24 * 365 * 1000);
  let days = elapsedTime % (3600 * 24 * 365 * 1000);
  let fullDaysCount = days / (3600 * 24 * 1000);
  let hours = days % (3600 * 24 * 1000);
  let fullHoursCount = hours / (3600 * 1000);
  let minutes = hours % (3600 * 1000);
  let fullMinutesCount = minutes / (60 * 1000);
  document.getElementById('age').innerHTML = Math.floor(years) + ' ans ' + Math.floor(fullDaysCount) + ' jours ' + Math.floor(fullHoursCount) + ' heures et ' + Math.floor(fullMinutesCount) + ' minutes ';
}

const birthYear = document.getElementById('birthYear');
const myAge = document.getElementById('age');
const birthdayCake = document.getElementById('birthdayCake');
const baby = document.getElementById('baby');
const ageContainer = document.getElementById('ageContainer');

ageContainer.addEventListener('mouseover', displayAge);
ageContainer.addEventListener('mouseout', displaybirthYear);
function displayAge() {
  age();
  birthYear.style.display = 'none';
  myAge.style.display = 'inline';
  birthdayCake.style.display = 'inline';
  baby.style.display = 'none';
}
function displaybirthYear() {
  birthYear.style.display = 'inline';
  myAge.style.display = 'none';
  birthdayCake.style.display = 'none';
  baby.style.display = 'inline';
}

// année footer
let today = new Date();
document.getElementById('year').innerHTML = today.getFullYear();

//
const locBtn = document.getElementById('locBtn');
const locCard = document.getElementById('locCard');
locBtn.addEventListener('click', displayCard);
function displayCard() {
  locCard.classList.toggle('cardVisible');
  
}



