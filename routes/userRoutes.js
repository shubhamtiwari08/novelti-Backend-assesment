const express = require("express");
const router = express.Router();
const userController = require('../Controllers/userController')

router.get('/users',async (req,res)=>{
  try {
    const user = await userController.getAllUser()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
})

router.get('/users/:id', async (req,res)=>{
  try {
    const {id} = req.params
    const user = await userController.getSingleUser(id)
    console.log(user)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
})


router.post("/users", async (req, res) => {
  try {
    const {firstName,lastName,email,mobileNo,address1,address2,state,city,country,zipCode } =  req.body;
    console.log(firstName,lastName,email,mobileNo,address1,address2,state,city,country,zipCode)
    const newUser = await userController.createUser({firstName,lastName,email,mobileNo,address1,address2,state,city,country,zipCode});
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const result = await userController.deleteUser( id );
    if(!result){
    res.status(404).json({message:"user not found"});
    }

    const updatedUser = await userController.getAllUser()

    res.status(200).json({message:"user not found",users:updatedUser});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    console.log(updates)

    const updatedUser = await userController.updateUser(id, updates);

    const updatedUsers = await userController.getAllUser()

    res.status(201).json({message:"user updated successfully",users:updatedUsers});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports=router;
