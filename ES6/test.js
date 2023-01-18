const test = [
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
// let result = []
// const result_filter = test.forEach((item)=>{
//     if(item.age < 25){
//         result.push(item)
//     }
// })
// console.log(result_filter)

const result_filter = test.filter((item) => item.age < 25)
console.log(result_filter)
