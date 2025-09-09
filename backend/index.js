import express from "express";
import multer from "multer";
import mysql from "mysql";
import cors from "cors";
import path from "path";
import fs from "fs"

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname+Date.now()+ path.extname(file.originalname));
  },
});
const upload = multer({ storage:storage });


const db = mysql.createConnection({
  host: "localhost",
  user: "root", 
  password: "vasanthan@36",
  database: "vasanth",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected");
});

app.get("/",(req,res)=>{
  const sql="select *from employee";
  db.query(sql,(err,data)=>{
    if (err) return res.json({error:err.message})
    res.json(data)
  })
})

app.get("/view/:id", (req, res) => {
  const { id } = req.params;
  const query = "select * from employee where id = ?";
  db.query(query, [parseInt(id)], (err, data) => {
    if (err) return res.json({ error: err });
    if (data.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(data);
  });
});


app.post("/add", upload.single("file"), (req, res) => {
  const { name, empId, department, designation, project, type, status } =
    req.body;
  const filePath = req.file ? req.file.filename : null;

  const sql = `insert into employee 
    (name, empId, department, designation, project, type, status, file)
    values (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [name, empId, department, designation, project, type, status, filePath],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Database error" });
      }
      res.json({ message: "Employee data saved successfully" });
    }
  );
});


app.put("/update/:id", upload.single("file"), (req, res) => {
  const { id } = req.params;
  const { name, empId, department, designation, project, type, status ,file} =
    req.body;
  const filePath = req.file ? req.file.filename : file;

  const sql = `
    update employee 
    set name=?, empId=?, department=?, designation=?, project=?, type=?, status=?, file=?
    where id=?
  `;

  db.query(
    sql,
    [name, empId, department, designation, project, type, status, filePath, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Employee updated successfully" });
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const sql = "select file from employee where id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }
    const fileName = result[0].file; 

    const deleted = "delete from employee where id = ?";
    db.query(deleted, [id], (err, data) => {
      if (err) return res.status(500).json({ error: err.message });

      if (fileName) {
        const filePath = path.join("uploads", fileName);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.warn("File not found", filePath);
          } else {
            console.log("File deleted:", filePath);
          }
        });
      }
      res.json({ message: "Employee and file deleted successfully" });
    });
  });
});



app.listen(5000, () => {
  console.log("Server Started...");
});
