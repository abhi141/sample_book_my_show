const uuid = require('uuid').v4
const MovieModel = require('../../models/Movie')
 
class  Movie{


    async createMovie(movieInfo,queryParams){
        movieInfo["movie_id"]=uuid()
        let dupCheck= await MovieModel.findOne({movie_name:movieInfo.movie_name})
        if(dupCheck){
            return {status:true,message:"Movie Already Exists"}
        }
        else{
            return MovieModel.create(movieInfo).then((movieCreatedResponse)=>{
                return{status:true,data:movieCreatedResponse}
            })
        }
       
    }

    async getMovieList(queryParams){
        let findQuery={}
        return MovieModel.find(findQuery).then((movieCreatedResponse)=>{
            return{status:true,data:movieCreatedResponse}
        })
    }

}
// const MovieObject = new Movie()
module.exports=new Movie()
// module.exports.createMovie=MovieObject.createMovie
