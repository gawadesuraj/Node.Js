
const User = require("../models/user.js")
const handlesGetAllUsers = async (req, res) =>{
    
    return res.json(await User.find({}))
}

const getUserById = async (req, res) => {
  const id = Number(req.params.id);
  if (id > 50) return res.json({ status: "User not found..." });
  const user = users.find((user) => user.id === id);
  return res.json(user);

}

const postRequest = async (req, res) => {
  const body = req.body;
  console.log(req.body);
  // users.push({ ...body, id: users.length + 1 });
  // fs.writeFile(
  //   "./fake_users_1_to_50.json",
  //   JSON.stringify(users),
  //   (err, data) => {
  //     return res.json({ status: "success ", id: users.length });
  //   }
  // );

  const user = await User.create({
    firstName:body.firstName,
    lastName:body.lastName,
    email: body.email,
    jobTitle:body.jobTitle,
    gender: body.gender
  })

  console.log(user);
  
  return res.send({message: "success"});
}

const patchRequest = async (req, res) => {
  const userId = Number(req.params.id);
  const { email } = req.body;

  const user = users.find((user) => user.id === userId);

  if (!user) return status(404).JSON({ messge: "User is not found..." });

  if (email) {
    user.email = email;
  }
  return res.json({ message: "User updated", user });
}

const deleteRequest = async (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === userId);
  if (index === -1) {
    return res.status(404).json({ message: "User is not found" });
  }
  const deleteUser = users.splice(index, 1);

  fs.writeFile(
    "./fake_users_1_to_50.json",
    JSON.stringify(users, null, 2),
    (err, data) => {
      return res.json({ status: "success ", id: users.length });
    }
  );
  return res.json({ status: "User Dleted", deleteUser, length: users.length });
}
module.exports = { 
    handlesGetAllUsers,getUserById, postRequest, patchRequest, deleteRequest
}