// // document.write('hello wordl'
// // 


















// for(let number = 1; number <= 20; number++) {
//     if (number % 2 != 0 && number % 3 == 0) {
//         console.log (number +" - i love coding");
//     }
//     else if(number % 2 !=  0) {
//     console.log(number + ' - santai');
//     } else {
//         console.log(number + ' - berkualitas');
//     }
// }


// logic 1 soal 1
    
//  for(let y = 1; y <10; y++){
//     for(let x = 1; x <10; x++) {
//         if(x == y){
//             document.write(' * ');
//         }else{
//             document.write(' ~ ')
//         }
//     }
//     document.write('<br>')
//  }


// logic 1 soal 2
// for (let y = 1; y < 10; y++) {
//     for(let x = 1; x < 10; x++) {
//         if (x+y == 10) {
//             document.write(` ${y} `);
//         } else {
            
//             document.write(' _ ')
//         }

//     }
//     document.write('<br>');
// }

// document.write('<br>')

// logic 1 soal 3
// for (let y = 1; y <10; y++) {
//     for(let x = 1; x < 10; x++){
//         if (x + y ==10 || x == y){
//             document.write(' * ');
//         } else {

//             document.write(' ~ ')
//         }
//     }
//     document.write('<br>')
// }

// document.write('<br>')

// // logic 1 soal 4
// for (let y = 1; y <10; y++) {
//     for(let x = 1; x < 10; x++){
//         if (x + y ==10 || x == y){
//             document.write(' * ');
//         } else if (x == 5 || y == 5){
//             document.write(' * ')
//         }
//         else {

//             document.write(' ~ ')
//         }
//     }
//     document.write('<br>')
// }

// document.write('<br>')

// logic 1 soal 5
// for (let y = 1; y <10; y++) {
//     for(let x = 1; x <10; x++){
//         if (x <= y ){
//             document.write(' * ');
//         } else {

//             document.write(' ~ ')
//         }
//     }
//     document.write('<br>')
// }

// document.write('<br>')


// logic 1 soal 6
// for (let y = 1; y <10; y++) {
//     for(let x = 1; x < 10; x++){
//         if (x + y >= 10 ){
//             document.write(' * ');
//         } else {

//             document.write(' ~ ')
//         }
//     }
//     document.write('<br>')
// }

// document.write('<br>')


// logic 1 soal 7
// for(let y = 1; y <10; y++) {
//     for(let x = 1; x <10; x++){
//         if(x <= 9 -(y - 1) && x >= y || x >= 9 -(y - 1)  && x <= y) {
//             document.write(' + ')
//         }else {
//             document.write(' ~ ')
//         }

//     }
//     document.write('<br>')
// }

// document.write('<br>')



//logic 1 soal 8
// for(let y = 1; y <10; y++) {
//     for(x = 1; x <10; x++) {
//         if( x + y >= 10 && x >= y || x + y <= 10 && x <= y){
//             document.write(' + ');
//         }else {
//             document.write(' ~ ')
//         }
//     }
//     document.write('<br>')

// }

// document.write('<br>')


// logic 1 soal 7 versi ke-2
// for(let y = 1; y <10; y++) {
//     for(let x = 1; x <10; x++) {
//         if(x <= y && x + y >= 10 || x >= y && x + y <= 10){
//             document.write(' * ');
//         }else{
//             document.write(' ~ ')
//         }

//     }
//     document.write('<br>')
// }

// for(let y = 1; y <10; y++) {
//     for(let x = 1; x <10; x++){
//         if(x == y){
//             document.write('' + (x + x - 1) + "");
//         }else{
//             document.write(' + ')
//         }
//     }
//     document.write('<br>')
// }

// document.write('<br>')

// for(let y = 1; y <10; y++) {
//     for(let x =1; x <10; x++) {
//         if(x + y == 10){
//             document.write('' + (x + x - 2) +  "")
//         }else{
//             document.write(' ~ ')
//         }
//     }
//     document.write('<br>')
// }

// document.write('<br>')

// for(let y = 1; y <10; y++) {
//     for(let x = 1; x <10; x++) {
//         if(x + y == 10 ){
//             document.write('' + (x + x - 2) + "")
//         }else  if(x == y){
//             document.write('' + (x + x - 1) + "")
//         }else{
//             document.write(' ~ ')
//         }
//         }
//         document.write('<br>')
// }

// for(let y = 1; y <10; y++) {
//     for(let x = 1; x <10; x++){
//         if(y >=1 && y <=2 && x >=1 && x <=10)
//         (y >=3 && y <=4 && x >=1 && x <=2) ||
//         (y >=5 && y <=6 && x >=1 && x <=10) ||
//         (y >=7 && y <=10 && x >= 1 && x <=2)||
//             document.write("f")
//         }
//             document.write("")
        
        
//     }
//     document.write('<br>')

// for(let y = 1; y <10; y++) {
//     for(let x = 1; x <10; x++) {
//         if(y == 1 && x >= 1 && x <=5 || x ==3 && y >=2 && y <=4){
//             document.write(' * ')
//         }else{
//             document.write('')
//         }
//     }
//     document.write('<br>')
// }






for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++) {
        if(y == 1 || y == 5 || x == 1){
            document.write('*');
        }else{
            document.write('~')
        }
    }
    document.write('<br>')
}


document.write('<br>')


for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++){
        if(x == 1 && y > 5 ||x-y <5 && x-y > 3 || x+y ==6 || x ==9 && y > 5 || y == 5){
            document.write('*')
        }else{
            document.write('~')
        }
    }
    document.write('<br>')
}

document.write('<br>')

for(let y = 1; y <10; y++) {
    for(let x = 1; x <10; x++){
        if(y == 1 ||y == 9 ||x == 5) {
            document.write('*');
        }else[
            document.write('~')
        ]
    }
    document.write('<br>')
}

document.write('<br>')

for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++){
        if(y == 1||y == 9||y + x == 10){
            document.write("*");
        }else{
            document.write('~')
        }
    }
    document.write('<br>')
}