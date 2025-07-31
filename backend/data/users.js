import bcrypt from "bcryptjs";


const users = [
    {
        name: "Admin User",
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,

    },
    {
        name: "John Doe",
        email: "johndoe@email.com",
        password: bcrypt.hashSync('1234567', 10),
        isAdmin: false,               
    },
    {
        name: "Jane Smith",
        email: "janesmith@email.com",
        password: bcrypt.hashSync('12345678', 10),
        isAdmin: false,
    },  
];


export default users;