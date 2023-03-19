// var a = +prompt('Введите первое число');
// var b = +prompt('Введите второе число');
// var c = +prompt('Введите третье число');

//     if ((a > b) && (b < c)) {
//     var d = b;
//     alert(d);
//     } else if ((a < b) && (a > c)) {
//         var d = a;
//         alert(d);
//     } else if( (c < a) && (c > b) ){
//         var d = c;
//         alert(d);
//     }

var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третье число');

if((b < a && a < c) || (c < a && a < b))
    alert(a);
if((a < b && b < c) || (c < b && b < a))
    alert(b);
if((a < c && c < b) || (b < c && c < a))
    alert(c);