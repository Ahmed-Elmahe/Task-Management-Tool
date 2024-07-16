import React, { useState } from 'react';
import axios from 'axios';


export default function Task(){
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateP, setDateP] = useState("");
  const [dateE, setDateE] = useState("");

  async function submit(event) {
    event.preventDefault();

    try{
    await axios.post('http://localhost:8080/create', {title, subtitle, description, dateP, dateE});
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className='container col-5 text-center rounded position-absolute top-50 start-50 translate-middle p-3 bg-light'>
      <form method='POST'>
        <div className='row mt-4'>
          <div className='col-4'>
            <input type="text" className="form-control" id="FormControlInput1" placeholder="Title" 
            value={title} onChange={(event) => setTitle(event.target.value)}/>
          </div>
        </div>
        <div className='row mt-2'>
            <div className='col-5'>
              <input type="text" className="form-control" id="FormControlInput2" placeholder="Subtitle" 
              value={subtitle} onChange={(event) => setSubtitle(event.target.value)} />
            </div>
        </div>
        <div className='row mt-2'>
            <div className='col-6'>
              <textarea class="form-control" id="exampleFormControlTextarea3" placeholder='description' 
              value={description} onChange={(event) => setDescription(event.onChange.value)}/>
            </div>
        </div>
        <div className='row mt-2'>
            <div className='col-2 d-flex align-items-center'>
              <label for="FormControlInput4" class="form-label">Start date</label>
            </div>
            <div className='col-4'>
              <input type="date" id="FormControlInput4" className="form-control" 
              value={dateP} onChange={(event) => setDateP(event.target.value)}/>
            </div>
        </div>
        <div className='row mt-2'>
          <div className='col-2 d-flex align-items-center'>
            <label for="FormControlInput5" class="form-label">End date</label>
          </div>
            <div className='col-4'>
              <input type="date" id="FormControlInput5" className="form-control" 
              value={dateE} onChange={(event) => setDateE(event.target.value)}/>
            </div>
        </div>
        <div className='row mt-5 justify-content-md-center'>
          <div className='col-2'>
            <button type='submit' className='btn btn-primary' onClick={submit}>Submit</button>
          </div>
        </div> 
      </form>       
    </div>
  ); 
}