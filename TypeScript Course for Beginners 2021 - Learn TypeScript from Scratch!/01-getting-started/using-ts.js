var button = document.querySelector('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var add = function (n1, n2) {
    return +n1 + +n2;
};
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
