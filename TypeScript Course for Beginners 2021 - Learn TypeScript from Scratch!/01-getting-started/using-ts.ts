const button = document.querySelector('button');
const input1 = document.getElementById('input1')! as HTMLInputElement;
const input2 = document.getElementById('input2')! as HTMLInputElement;

const add = (n1: number, n2: number) => {
    return +n1 + +n2;
}

button.addEventListener('click', () => {
    console.log(add(+input1.value, +input2.value));
})