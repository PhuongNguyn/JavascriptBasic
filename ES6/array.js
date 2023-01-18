const a = [1,2,3,4,5,6]

// Vong lap binh thuong
for(let i = 0; i < a.length; i++){
    console.log(a[i])
}

// lap dung forEach => kieu tra ve la void
const result = a.forEach((item)=>console.log(item))

// lap dung map => kieu tra ve la 1 mang moi
const result_map = a.map((item) => item + 1)

// lap dung filter => kieu tra ve la 1 mang moi
const result_filter = a.filter((item) => item % 2 == 0)
console.log(result_filter)

// let result_filter = []
// for(let i = 0; i<a.length; i++){
//     if(a[i] % 2 == 0){
//         result_filter.push(a[i])
//     }
// }

let test = [
    {   
        name: 'Phuong',
        age: 20,
    },
    {
        name: 'Tuan',
        age: 25,
    },
    {
        name: 'Bao', 
        age: 26
    },
    {
        name: 'Name',
        age: 21,
    },
    {
        name: 'Minh',
        age: 22
    }
]

[
    {   
        name: 'Phuong',
        age: 20,
    },
    {
        name: 'Name',
        age: 21,
    },
    {
        name: 'Minh',
        age: 22
    }
]





