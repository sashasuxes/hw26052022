const inp1 = document.querySelector('input[name="test1"]');
const out1 = document.querySelector('.out1');

inp1.addEventListener('change', (ev) => {
    let text1 = ev.target.value;

    out1.textContent = text1;
});

const inp2 = document.querySelector('input[name="test2"]');
const out2 = document.querySelector('.out2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let text2 = inp2.value;

    out2.textContent = text2;
});
