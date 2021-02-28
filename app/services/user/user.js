const uuid = require('uuid').v4
const UserModel = require('../../models/User')
 
class  User{


    async createUser(userInfo,queryParams){
        userInfo["account_id"]=uuid()
        let dupCheck= await UserModel.findOne({email:userInfo.email})
        if(dupCheck){
            return {status:true,message:"Email Already Exists"}
        }
        else{
            return UserModel.create(userInfo).then((userCreatedResponse)=>{
                return{status:true,data:userCreatedResponse}
            })
        }
       
    }


    async login(userInfo,queryParams){
        let emailCheck= await UserModel.findOne({email:userInfo.email,password:userInfo.password})
        if(emailCheck){
            let login_token=Buffer.from(emailCheck["account_id"]).toString('base64')
            return UserModel.findOneAndUpdate({email:userInfo.email},{$set:{token:login_token}}).then((userCreatedResponse)=>{
                return{status:true,data:userCreatedResponse}
            })
            
        }
        else{
            return {status:true,message:"Email ID Not Found"}
        }
       
    }


    async validateToken(accountId){
        let tokenCheck= await UserModel.findOne({account_id:accountId})
        if(tokenCheck){
            
            return true
           
            
        }
        else{
            return false
        }
       
    }

}
// const userObject = new User()
module.exports=new User()
// module.exports.createUser=userObject.createUser
