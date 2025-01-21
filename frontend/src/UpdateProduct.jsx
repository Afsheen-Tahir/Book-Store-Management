import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function UpdateProduct() {
    useEffect(()=>{
        axios.get("http://localhost:8080/singleproduct/"+id)

        .then(res=>{
console.log(res);
        
setacc_no(res.data.titleer_acc_no);
settype(res.data.type);
settitle(res.data.title);
setwriter(res.data.writer);
setedition(res.data.edition);
        })
.catch(err=>console.log("There is an error in getting",err));
    },[]);
    const { id } = useParams();
    const [acc_no,setacc_no]=useState('');
    const [type,settype]=useState(0); 
    const [title,settitle]=useState('');
    const [writer,setwriter]=useState('');
    const [edition,setedition]=useState('');
     const navigate=useNavigate();
     

   
   
    function handleSubmit(e){
e.preventDefault();
       

axios.put("http://localhost:8080/updateproduct/"+id ,{acc_no,writer,type,title,edition}).then(res=>{
    console.log("Data has been send by put");
navigate('/');

}).catch(errr=>console.log("data not send",errr));


    }
  return (
    <>
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        
        <div className='w-60 bg-white rounded'> 
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h2 className='bg-success'>Update Book</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Acc_no  : </label>
                    <input type='text' placeholder='Enter the acc_no' className='form-control'
                  value={acc_no}  onChange={e=>setacc_no(e.target.value)}
                    />

                </div>
                

               
                <div className='mb-2'>
                    <label htmlFor=''>Type : </label>
                    <input type='text' placeholder='Enter the type' className='form-control'
                  value={type}  onChange={e=>settype(e.target.value)}
                    />

                </div>
                <div className='mb-2'>
                    <label htmlFor=''>title: </label>
                    <input type='text' placeholder='Enter the title' className='form-control'
                   value={title} onChange={e=>settitle(e.target.value)}
                    />

                </div>
             
                <div className='mb-2'>
                    <label htmlFor=''>writer: </label>
                    <input type='text' placeholder='Enter the writer' className='form-control'
                   value={writer} onChange={e=>setwriter(e.target.value)}
                    />

                </div>
                <div className='mb-2'>
                    <label htmlFor=''>edition: </label>
                    <input type='text' placeholder='Enter the edition' className='form-control'
                   value={edition} onChange={e=>setedition(e.target.value)}
                    /> 
                </div>
               
                
                <input type='submit' value="Update Book" className='btn btn-success'/>
            </form>


            </div>
            </div>
    </>
  )
}

export default UpdateProduct