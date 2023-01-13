//for loop
const a = [5,6,7,8,9]

for(let i = 0; i < a.length; i++){
    console.log(a[i])
    //Dùng break để dừng vòng lặp
    // if(i == 4){
    //     break;
    // }
}

// while loop
let index = 0
while(index < a.length){
    console.log(a[index])
    index++
}

// do while 
let index2 = 0
do{
    console.log(a[index2])
    index2++ 
}while(index2 < a.length);

