// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// function ShowAll() {
//     const [count ,setcount]=useState([])
//     useEffect(()=>{
//         axios.get("http://localhost:8080/")
//         .then(res=>setcount(res.data))
// .catch(err=>console.log(err));
//     },[])
//     const handleDelete=async(id)=>{
//         try{
            
            
//             await axios.delete('http://localhost:8080/deleteproduct/'+id);
//             console.log('http://localhost:8080/deleteproduct/'+id);
//             window.location.reload();
//         }
//         catch(err){
// console.log(err);
//         }
//     }
//   return (
//     <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
//         <h1 >Book Store System</h1>
//         <div className='w-60 bg-white rounded'>            
// <Link to="/addproduct" className='btn btn-primary '>Add Book </Link>
//         </div>
//         <table className='table table-stripped'>
//             <thead>
// <tr>
//     <th>Article No</th>
//     <th>Title</th>
//     <th> Writer</th>
//     <th>Type</th>
//     <th>Edition</th>
//     <th>Update</th>
//     <th>Delete</th>
// </tr>
//             </thead>
//             <tbody>
//                 {
// count.map((data,i)=>(

//     <tr key={i}>
//         <td>{data.acc_no}</td>
//         <td>{data.title}</td>
//         <td>{data.writer}</td>
//         <td>{data.type}</td>
//         <td>{data.edition}</td>
       

//         <td> 
//             <Link to={`/updateproduct/${data.acc_no}`} className="btn btn-success">
//   Update
// </Link>
// </td>
//         <td><button onClick={e=>handleDelete( data.acc_no)} className='btn btn-danger ms-2'>Delete</button></td>
//     </tr>
// ))
//                 }
//             </tbody>

//         </table>
//     </div>
//   )
// }

// export default ShowAll

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ShowAll() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => setCount(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/deleteproduct/" + id);
      console.log("http://localhost:8080/deleteproduct/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" vh-100 bg-info d-flex justify-content-center align-items-center">
      <div className="row w-60">
        {/* heading */}
        <div className="col-12 text-center mb-3">
          <h1 className="text-white">Book Store</h1>
        </div>

        {/*btn adding */}
        <div className="col-12 mb-4 text-end">
          <Link to="/addproduct" className="btn btn-primary">
            Add Book
          </Link>
        </div>

        {/* table */}
        <div className="col-12">
          <div className="table-responsive bg-white rounded p-3">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Article No</th>
                  <th>Title</th>
                  <th>Writer</th>
                  <th>Type</th>
                  <th>Edition</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {count.map((data, i) => (
                  <tr key={i}>
                    <td>{data.acc_no}</td>
                    <td>{data.title}</td>
                    <td>{data.writer}</td>
                    <td>{data.type}</td>
                    <td>{data.edition}</td>
                    <td>
                      <Link
                        to={`/updateproduct/${data.acc_no}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={(e) => handleDelete(data.acc_no)}
                        className="btn btn-danger ms-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowAll;
