
const connection= require('./../../../DB/connection');

const getData= (req, res) => {  // READ 
    const SQL = `SELECT * FROM users`
    connection.execute(SQL,(err,result)=>{
    if(result.length==0)return res.json({massege : "No user found !"})
    return res.json(result)
    
});
}
const postData = (req, res) => {  //add user
    const {email , password , bio,name} = req.body;
    const SQL = `INSERT INTO users (email, password, bio,name) VALUES ('${email}', '${password}', '${bio}','${name}')`;
    connection.execute(SQL,(err, result) => {
       if(err) {
           console.log(err);
           return res.json("error");
       }
       return res.json("added successfully");
    });
 
}
const deleteData =(req, res) => {
    const {id} = req.params;
    const SQL = `DELETE blog
    FROM blog
    INNER JOIN users ON blog.user_id = users.id
    WHERE users.id = ${id}`;
    connection.execute(SQL)

    const SQL2 = `DELETE 
    FROM users where id= ${id}`;
    connection.execute(SQL2,(err, result) => {
        if(err){
             res.json(err);
          }
         
         if(result.affectedRows==0){
          return res.json({message:"this id not found"})
         }
         return res.json("delete successful");
      })

}
const updateData =(req, res) => {
    const {id} = req.params;
    const {email} = req.body;
    const SQL = `update users set email ='${email}' where id ='${id}'`;
    connection.execute(SQL,(err, result) => {
      if(err){
        console.log(err);
        if(err.errno==1062){
            console.log(err.errno)
           return res.json({message:"this user is already existing "})
        }
       }
       if(result.affectedRows==0){
        return res.json({message:"this id not found"})
       }
       return res.json("update successful");
    });
}

module.exports = {getData,postData,deleteData,updateData}