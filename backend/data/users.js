import bcrypt from "bcryptjs"


const user =[
  {
    name:"Admin user",
    email:"admin@example.com",
    password:bcrypt.hashSync('12345', 10),
    isAdmin: true
  },
  {
    name:"yousaf",
    email:"yousaf@example.com",
    password:bcrypt.hashSync('12345', 10),
    isAdmin: false,
  },
  {
    name:"Ahmad",
    email:"Ahmad@example.com",
    password:bcrypt.hashSync('12345', 10),
    isAdmin: false,
  },
]

export default user
