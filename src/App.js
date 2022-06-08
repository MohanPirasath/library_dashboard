// import logo from './logo.svg';

import * as React from "react";
import {useState,useEffect} from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import TextField from '@mui/material/TextField';

// import { DataGrid } from "@mui/x-data-grid";

import "./App.css";
import { ResponsiveAppBar } from "./pages";
import { Button } from "@mui/material";
// import { refType } from "@mui/utils";

import { Routes, Route, Link, useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import {useFormik}from "formik";

import * as yup from "yup";

// import { useFormik } from "formik";


function App() {
  // const [Books,Setbook] =useState([
  //   {
  //     name: "english",
  //     author:"mohan",
  //     Row_coloum: "2-8",
  //     Lang: "Tamil",
  //     ID: "1",
  //     Availability: true,
  //   },
  //   {
  //     name: "Tamil",
  //     author:"mohan",
  //     Row_coloum: "5",
  //     Lang: "Tamil",
  //     ID: "2",
  //     Availability: true,
  //   },
  //   {
  //     name: "Tamil",
  //     author:"mohan",
  //     Row_coloum: "5",
  //     Lang: "Tamil",
  //     ID: "3",
  //     Availability: true,
  //   },
  //   {
      
  //     name: "Tamil",
  //     author:"mohan",
  //     Row_coloum: "5",
  //     Lang: "Tamil",
  //     ID: "4",
  //     Availability: true,
  //   },
  //   {
  //     name: "Tamil",
  //     author:"mohan",
  //     Row_coloum: "5",
  //     Lang: "Tamil",
  //     ID: "5",
  //     Availability: true,
  //   },
  //   {
  //     name: "Tamil",
  //     author:"mohan",
  //     Row_coloum: "5",
  //     Lang: "Tamil",
  //     ID: "6",
  //     Availability: true,
  //   },
  //   {
  //     name: "Tamil",
  //     author:"mohan",
  //     Row_coloum: "5",
  //     Lang: "Tamil",
  //     ID: "7",
  //     Availability: true,
  //   },
  //   {
  //     name: "Tamil",
  //     author:"mohan",
  //     Row_coloum: "5",
  //     Lang: "Tamil",
  //     ID: "8",
  //     Availability: true,
  //   },
  //   {
  //     name: "Tamil",
  //     author:"mohan",
  //     Row_coloum: "5",
  //     Lang: "Tamil",
  //     ID: "9",
  //     Availability: false,
  //   },
  //   {
  //     name: "Maths",
  //     author:"mohan",
  //     Row_coloum: "6",
  //     Lang: "Tamil",
  //     ID: "10",
  //     Availability: true,
  //   },
  // ]);
  return (
    <div className="App">
      <div>
        <ResponsiveAppBar />
      </div>

       <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Availability" element={<CustomizedTables  />}/>
        <Route path="/Addbook" element={<AddBook />}/>
        <Route path="/Editbooks" element={<EditBooks />}/>
        <Route path="/EditBooks/https://627e2f98b75a25d3f3b31113.mockapi.io/Books/:id" element={<Editform />}/>
        {/* <Route path="/Movies/edit/:id1" element={<Editmovie />} /> */}
       
      </Routes>
       </div>





      {/* <h1>Hii...,,Ajay😊😍❤</h1> */}
      <div>
        {/* <DataTable/> */}
        {/* <CustomizedTables  Books={Books}/> */}
      </div>
      <div>
        {/* <DataTable/> */}
        {/* <AddBook Books={Books}Setbook={Setbook}/> */}
      </div>
    </div>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



function CustomizedTables() {
  const [books,setbok]=useState([])

React.useEffect((()=>{
  const books= fetch("https://627e2f98b75a25d3f3b31113.mockapi.io/Books")
  .then((data)=>data.json())
  .then((data)=>setbok(data))
}),[])

  return (
    <div>
      <div>
        <h2>Book Available</h2>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell >ID</StyledTableCell>
              <StyledTableCell>Book's Availability</StyledTableCell>
              <StyledTableCell >author</StyledTableCell>
              <StyledTableCell align="right">Row&Col</StyledTableCell>
              <StyledTableCell align="right">Lan</StyledTableCell>
              <StyledTableCell align="right">Availability</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           

            {books.map((bo) => (
              <StyledTableRow key={bo.id}>
              <StyledTableCell component="th" scope="row">{bo.id}</StyledTableCell> 
               <StyledTableCell >
                  {bo.name}
                </StyledTableCell>
                 <StyledTableCell component="th" scope="row">{bo.author}</StyledTableCell>
                <StyledTableCell align="right">{bo.Row_coloum}</StyledTableCell>
                
                <StyledTableCell align="right">{bo.Lang}</StyledTableCell>
                
                <StyledTableCell align="right">
                  {bo.Availability?"Avaible":"Unavaible"}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}



function Home(){
  return(
    <div>
      <h1>
        Welcome
      </h1>
      <p>
        Crud operation is working in this application and the formik and yup is include in this application.
      </p>
    </div>
  )
}


const formSchema = yup.object({
  tname:yup.string().required("Name of the Book is needed").min(2,"need bigger name"),
  tauthor:yup.string().required("Author Name is needed").min(2,"need bigger name"),
  tRow:yup.number().required("Plz Fill the Row number").min(1),
  tLang:yup.string().required("Which Language Book is this").min(2,"give full name"),

})

function AddBook(){
  const navigate=useNavigate();
 

  const {handleChange,values,handleBlur,touched, errors}=useFormik({
    initialValues:{tname:"",tauthor:``,tRow:``,tLang:``,table:`true`},
    validationSchema: formSchema
  });



// const[tid,setid]=useState()


// const[tname,settname]=useState()
// const[tauthor,setauthor]=useState()
// const[tRow,setRow]=useState()
// const[tLang,setLang]=useState()
// const[table,setable]=useState(true)

  return(
    <div className="makecenter">
      <div>
        <h2>AddBook</h2>
    
      </div>
      {/* <div className="spaceup">
      <TextField
          required
          id="filled-required"
          label="ID"
          placeholder="Id"
          variant="filled"
          onChange={(e)=>setid(e.target.value)}
        />
      </div> */}
      <form className="spaceup">
      <TextField
      name="tname"
          required
          id="filled-required"
          label="Book Name"
          placeholder="Book Name"
          variant="filled"
          // onChange={(e)=>settname(e.target.value)}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.tname && touched.tname? errors.tname:``}
     
      
      <TextField
      name="tauthor"
          required
          id="filled-required"
          label="Author name"
          placeholder="author name"
          variant="filled"
          // onChange={(e)=>setauthor(e.target.value)}
          onChange={handleChange}
          onBlur={handleBlur}


        />
        {errors.tauthor && touched.tauthor ? errors.tauthor:``}

      
      
      <TextField
      name="tRow"

          required
          id="filled-required"
          label="Row Number"
          placeholder="Row&Coloum"
          variant="filled"
          type="number"
          // onChange={(e)=>setRow(e.target.value)}
          onBlur={handleBlur}
          onChange={handleChange}

        />
        {errors.tRow && touched.tRow? errors.tRow : ``}

     
     
      <TextField
      name="tLang"
      required
          id="filled-required"
          label="Lang"
          placeholder="Lang"
          variant="filled"
          // onChange={(e)=>setLang(e.target.value)}
          onBlur={handleBlur}
          onChange={handleChange}

        />
        {errors.tLang && touched.tLang? errors.tLang:``}

      
      
      <TextField
      name="table"
      required
          disabled
          id="filled-required"
          label="Availablity"
          defaultValue= {values.table}
          variant="filled"
          // onChange={(e)=>setable(e.target.value)}
          onChange={handleChange}

        />
     
     
        <Button variant="contained" onClick={()=>{
          const add= {
            name:values.tname,
            author:values.tauthor,
            Row_coloum:values.tRow,
            Lang:values.tLang,
            // ID:tid,
            Availability:values.table

          }

            fetch("https://627e2f98b75a25d3f3b31113.mockapi.io/Books",{method:"POST",body:JSON.stringify(add),headers:{
              "content-type":"application/json"
            }}
            ).then(()=>navigate("/availability"))

          // Setbook([...Books,add])

        }

        }>Submit</Button>
      </form>
      
    </div>
  )
}


function EditBooks(){

  const [books,setbok]=useState([])

  useEffect((()=>{
    const book= fetch("https://627e2f98b75a25d3f3b31113.mockapi.io/Books")
    .then((data)=>data.json())
    .then((data)=>setbok(data))
  }),[])

  const navigate=useNavigate();

  return(
    <div>

      <div>
      <h2>Edit Books</h2>
      </div>
      <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell >ID</StyledTableCell>
              <StyledTableCell>Book's Availability</StyledTableCell>
              <StyledTableCell >author</StyledTableCell>
              <StyledTableCell align="right">Row&Col</StyledTableCell>
              <StyledTableCell align="right">Lan</StyledTableCell>
              <StyledTableCell align="right">Availability</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           

            {books.map((bo) => (
              <StyledTableRow key={bo.id}>
              <StyledTableCell component="th" scope="row">{bo.id}</StyledTableCell> 
               <StyledTableCell >
                  {bo.name}
                </StyledTableCell>
                 <StyledTableCell component="th" scope="row">{bo.author}</StyledTableCell>
                <StyledTableCell align="right">{bo.Row_coloum}</StyledTableCell>
                
                <StyledTableCell align="right">{bo.Lang}</StyledTableCell>
                
                <StyledTableCell align="right">
                 <Button onClick={()=>{
                   navigate(`https://627e2f98b75a25d3f3b31113.mockapi.io/Books/${bo.id}`)
                      // console.log(`"https://627e2f98b75a25d3f3b31113.mockapi.io/Books"/${bo.id}`)
                 }

                 } >Edit</Button>
                 <Button onClick={()=>{
                   fetch(`https://627e2f98b75a25d3f3b31113.mockapi.io/Books/${bo.id}`,{method:"DELETE"})
                   .then(()=>navigate("/availability"))
                 }} >Delete</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>

    </div>
  )
}


function Editform(){
  const {id}=useParams()
  
  
 
  
  const navigate=useNavigate();


  useEffect((()=>{
    const book= fetch(`https://627e2f98b75a25d3f3b31113.mockapi.io/Books/${id}`)
    .then((data)=>data.json())
    .then((data)=>{
     
    settname(data.name)
    settauthor(data.author)
    setRow(data.Row_coloum)
    setlan(data.Lang)
    setbok(data)
    return (book)
    })
    
    
  }),[id])
  

  const [books,setbok]=useState([])
  const[tname,settname]=useState([])
  const[tauthor,settauthor]=useState([])
  const[trow,setRow]=useState([])
  const[tlan,setlan]=useState([])
  const[table,setable]=useState([])

  

  
  return(
    <div className="makecenter">
      <div>
        <h2>
          EditBook Form 
        </h2>
      </div>
          {/* <div className="spaceup"> */}
      {/* <TextField
          required
          id="filled-required"
          label="ID"
          placeholder="Id"
          variant="filled"
          value={books.}
          // onChange={(e)=>setid(e.target.value)}
        />
      </div> */}
      <div className="spaceup">
      <TextField
          name="tname"
          required
          id="filled-required"
          // label="Book Name"
          // placeholder="Book Name"
          variant="filled"
          value={tname}
          onChange={(e)=>settname(e.target.value)}
          // onChange={formik.handleChange}
        />
      </div>
      <div className="spaceup">
      <TextField
          required
          id="filled-required"
          // label="Author name"
          // placeholder="author name"
          variant="filled"
          value={tauthor}

          onChange={(e)=>settauthor(e.target.value)}

        />
      </div>
      <div className="spaceup">
      <TextField
          required
          id="filled-required"
          // label="Row&Coloum"
          placeholder="Row&Coloum"
          variant="filled"
          value={trow}

          onChange={(e)=>setRow(e.target.value)}

        />
      </div>
      <div className="spaceup">
      <TextField
          required
          id="filled-required"
          // label="Lang"
          placeholder="Lang"
          value={tlan}

          variant="filled"
          onChange={(e)=>setlan(e.target.value)}

        />
      </div>
      <div className="spaceup">
      <TextField
          required
          disabled
          id="filled-required"
          label="Availablity"
          defaultValue="true"
          variant="filled"
          onChange={(e)=>setable(e.target.value)}

        />
      </div>
      <div>
        <Button onClick={()=>{
          const edited={
            name:tname,
            author:tauthor,
            Row_coloum:trow,
            Lang:tlan,
            Availability:table
          }
          fetch(`https://627e2f98b75a25d3f3b31113.mockapi.io/Books/${id}`,{
            method:"PUT",
            body:JSON.stringify(edited),
            headers:{"content-type":"application/json"}
          }).then(()=>navigate("/availability"))
        }}>Save</Button>
      </div>
    </div>
  )
}


export default App;
