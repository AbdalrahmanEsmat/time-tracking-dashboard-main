const buttons = document.querySelectorAll('.options button');
const currentNum = document.querySelectorAll('.current');
const previousNum = document.querySelectorAll('.previous');
const typeOfTime = document.querySelectorAll('.type-of-time');

const getData = async (e) => {
  // change the styleof the options
  buttons.forEach((btn) => {
    btn.classList.remove('chosen');
    btn.setAttribute('aria-pressed', 'false');
  });
  e.target.setAttribute('aria-pressed', 'true');
  e.target.classList.add('chosen');

  // fetch the data
  const res = await fetch('data.json');
  const data = await res.json();

  // change the status
  changeStatus(e.target.id, data);
};

buttons.forEach((btn) => {
  btn.addEventListener('click', getData);
});

const changeStatus = (type, data) => {
  const timeName =
    type === 'daily' ? 'Day - ' : type === 'weekly' ? 'Week - ' : 'Month - ';
  for (let count = 0; count < 6; count++) {
    currentNum[count].innerText = data[count].timeframes[type].current;
    previousNum[count].innerText = data[count].timeframes[type].previous;
    typeOfTime[count].innerText = timeName;
  }
};
