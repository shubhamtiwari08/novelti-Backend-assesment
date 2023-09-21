const {Users} = require('../models/users.model')

async function getAllUser(){
    try {
        const allUser = await Users.find()
        return allUser;
    } catch (error) {
        throw(error)
    }
}


async function getSingleUser(id){
    try {
        const singleUser = await Users.findById(id)
        return singleUser;
    } catch (error) {
        throw(error)
    }
}


async function createUser({firstName,lastName,email,mobileNo,address1,address2,state,city,country,zipCode}){
    try{
      const user= await Users({firstName,lastName,email,mobileNo,address1,address2,state,city,country,zipCode})
      const newUser = await user.save()
      return newUser;
    }catch(e){
       throw(e)
    }
}

async function updateUser({userId,updates}){
    try {
        const updatedUser = await Users.findByIdAndUpdate(userId,updates,{new:true})
        return updatedUser
    } catch (error) {
        throw error
    }
}

async function deleteUser(userId){
    try {
        console.log(userId)
        const deletedUser = await Users.findByIdAndDelete(userId);
        console.log(deletedUser);
        return ("users deleted sucessfully")
    } catch (error) {
        throw error
    }
}

module.exports={
    createUser,
    updateUser,
    deleteUser,
    getAllUser,
    getSingleUser,
}