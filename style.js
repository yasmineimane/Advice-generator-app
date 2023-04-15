const num = document.getElementById('num');
const advice_input = document.getElementById('advice');
const dice = document.getElementById('dice');

const fetchData = async() => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    const { slip } = data;
    const { id, advice } = slip;
    num.textContent = "#" + id;
    advice_input.textContent = advice;
    console.log('click');
}

fetchData();

dice.addEventListener('click', fetchData);