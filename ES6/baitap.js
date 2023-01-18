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
        name: 'Nam',
        age: 21,
    },
    {
        name: 'Minh',
        age: 22
    }
]

// Bài 1: Lấy ra những người có số tuổi lớn hơn 21

[
    {
        name: 'Tuan',
        age: 25,
    },
    {
        name: 'Bao', 
        age: 26
    },
    {
        name: 'Minh',
        age: 22
    }
]

// Bài 2: Lấy ra những người có tên là Tuan

[
    {
        name: 'Tuan',
        age: 25,
    },
]


// Bài 3: Trả về 1 mảng mới tuổi của mỗi người được cộng thêm 1 (map)

[
    {   
        name: 'Phuong',
        age: 21,
    },
    {
        name: 'Tuan',
        age: 26,
    },
    {
        name: 'Bao', 
        age: 27
    },
    {
        name: 'Nam',
        age: 28,
    },
    {
        name: 'Minh',
        age: 23
    }
]

// Bài 4: Trả về 1 mảng mới trong đó mỗi người được thêm 1 field là birth year (map => Đối với mỗi item => item.birthYear = 2002 => return item)

[
    {   
        name: 'Phuong',
        age: 21,
        birthYear: 2002,
    },
    {
        name: 'Tuan',
        age: 26,
        birthYear: 2002,
    },
    {
        name: 'Bao', 
        age: 27,
        birthYear: 2002,
    },
    {
        name: 'Nam',
        age: 28,
        birthYear: 2002,
    },
    {
        name: 'Minh',
        age: 23,
        birthYear: 2002,
    }
]

// Bài 5: Dùng forEach duyệt qua mảng và log ra những người có tên lớn hơn 3 chữ cái

// Minh
// Tuan
// Phuong

