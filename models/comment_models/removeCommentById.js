const db =  require("../../db/connection")


exports.removeCommentById = (comment_id)=>{

    return db.query(`DELETE FROM comments WHERE comment_id = $1 RETURNING *`,[comment_id])
    .then(({rows})=>{
        if(!rows.length){
            return Promise.reject({status:404,msg:`No comment found with the comment_id:${comment_id}`})
        }
    })
    .catch((err)=>{
        return Promise.reject(err)
    })
}