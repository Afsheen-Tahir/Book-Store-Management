const express=require("express");
const cors=require('cors');
const mysql=require('mysql');


const app=express();
app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "",
    database: "bookinventory"
});

db.connect((err) => {
    if (err) {
      console.error("Database connection failed:", err);
      return;
    }
    console.log("Connected to the database.");
  });

app.get('/',(req,res)=>{
    const sql="SELECT * FROM `bookinventory`";
    db.query(sql,(err,data)=>{
        if(err) return res.json("There is an error",err);
        return res.json(data);
    })
   
});

app.post('/addproduct',(req,res)=>{
    console.log("Received data:", req.body);
    const sql="INSERT INTO  `bookinventory`(acc_no,writer,type,title,edition) Values(?,?,?,?,?)";
    const values=[
        req.body.acc_no,
        req.body.writer,
        req.body.title,
        req.body.edition,
        req.body.type,
    ]
  
    db.query(sql,values,(err,data)=>{
        if(err) {
            console.log("There is an error in the inserting",err);
            return res.status(500).json({error : "An error occured while inserting data"})}
            return res.json({message: "product added successfully ",data});

    })

});
app.delete('/deleteproduct/:id',(req,res)=>{
    
    const sql="DELETE FROM `bookinventory` WHERE acc_no=?";
    const id=req.params.id;
    console.log(id);
    db.query(sql,[id],(err,data)=>{
        if(err){
            console.log("there is an error here in deletion ",err)
        }
        return res.json(data);
    })
   
});
app.get('/singleproduct/:id',(req,res)=>{
    const id=req.params.id;
    const sql="SELECT * FROM `bookinventory` WHERE acc_no=?";
    db.query(sql,[id],(err,data)=>{
        if(err) return res.json("There is an error in single product");
        return res.json(data[0]);
    })
   
});

app.put('/updateproduct/:id', (req, res) => {
    const id = req.params.id;
    const { acc_no, title, type, edition, writer } = req.body; // Destructure request body
    
    const sql = "UPDATE `bookinventory` SET acc_no=?, writer=?, type=?, title=?, edition=? WHERE acc_no=?";
    const values = [acc_no, title, type, edition, writer];

    db.query(sql, [...values,id], (err, data) => {
        if (err) {
            console.error("There is an error in updating the product:", err);
            return res.status(500).json({ error: "An error occurred while updating the product." });
        }

        return res.json({ message: "Product updated successfully", data });
    });
});

app.listen(8080,()=>{
    console.log("Me back");
})

