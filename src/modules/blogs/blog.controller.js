const connection= require('./../../../DB/connection');

const getData = (req, res) => {  // READ 
    const SQL = `SELECT name ,title , discripition FROM blog INNER join users on blog.user_id = users.id`
    connection.execute(SQL,(err,result)=>{
    if(result.length==0)return res.json({massege : "No user found !"})
    return res.json(result)
    
});
}

const postData = (req, res) => {  //add user
    const {title,description,id_user} = req.body;
    const SQL = `INSERT INTO blog (title, discripition,user_id) VALUES ('${title}', '${description}', '${id_user}')`;
    connection.execute(SQL,(err, result) => {
       if(err){
         if(err.errno==1452){
           return res.json("this id user not found");
         }
       }
       return res.json("added successfully");
    });
 
}
const deleteData =(req, res) => {
    const {id} = req.params;
    const {user_name} = req.body;
        const SQL = `delete from blog where id ='${id}' '`;
        connection.execute(SQL,(err, result) => {
           if(result.affectedRows==0){
           return res.json("this user not found");
           }
           return res.json("delete successful");
        });
}
const updateData = (req, res) => {
    const {id} = req.params;
    const {user_name,title,description} = req.body;
    const SQL = `UPDATE blog SET title='${title}', description='${description}' WHERE id='${id}' '`;
    connection.execute(SQL,(err, result) => {
       if(result.affectedRows==0){
       return res.json("this user not found");
       }
       return res.json("update successful");
    });
}

module.exports = {getData,postData,deleteData,updateData}