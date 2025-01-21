import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddItem() {
  const [acc_no,setacc_no]=useState('');
     const [type,settype]=useState(0); 
     const [title,settitle]=useState('');
     const [writer,setwriter]=useState('');
     const [edition,setedition]=useState('');
    const navigate=useNavigate();
    function handleSubmit(e){
e.preventDefault();
       

axios.post("http://localhost:8080/addproduct",{acc_no,type,title,writer,edition}).then(res=>{
    console.log("Data has been send");
navigate('/');

}).catch(errr=>console.log("data send",errr));


    }
  return (
    <>
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        
        <div className='w-60 bg-white rounded'> 
            <form onSubmit={handleSubmit}>
                <h2 className='bg-success'>Add Book</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Acc_no : </label>
                    <input type='text' placeholder='Enter the acc_no' className='form-control'
                    onChange={e=>setacc_no(e.target.value)}
                    />

                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Title: </label>
                    <input type='text' placeholder='Enter the title: ' className='form-control'
                    onChange={e=>settitle(e.target.value)}
                    />

                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Type : </label>
                    <input type='text' placeholder='Enter the type' className='form-control'
                    onChange={e=>settype(e.target.value)}
                    />

                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Edition : </label>
                    <input type='text' placeholder='Enter the Edition' className='form-control'
                    onChange={e=>setedition(e.target.value)}
                    />

                </div>
                
                <div className='mb-2'>
                    <label htmlFor=''>Writer</label>
                    <input type='day' placeholder='Enter the Writer' className='form-control'
                    onChange={e=>setwriter(e.target.value)}
                    />

                </div>
                
                
                <input type='submit' value="Add Product" className='btn btn-success'/>
            </form>


            </div>
            </div>
    </>
  )
}

export default AddItem