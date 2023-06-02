import React, { useState } from 'react'
import axios from 'axios';

function Project() {
  const [photo, setPhoto] = useState('');
  const [result, setResult] = useState([]);
  const changePhoto = () => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=ZlFwahohGXX0KyrpAzEmns70iF3DPR42XtckaRWTHbA`)
      .then((res) => {
        //  console.log(res.data.results);
        setResult(res.data.results)
      })
  }
  return (
    <>
    
      <div className='container text-center my-5'>
        <input type='text' className='form-control' value={photo} onChange={(eve) => {
          setPhoto(eve.target.value)
        }} />


        <button type='submit' onClick={changePhoto} className='btn btn-primary my-2' >Get photo</button>
      </div>



      <div className='container'>
        <div className='row text-center text-lg-start'>
          {result.map((value) => {
            return (
              <div className='col-lg-3 col-md-4 col-sm-6 p-2'>
                <img className='img-fluid img-thumbnail' src={value.urls.small} alt='images' />y
              </div>
            )
          })
          }

        </div>
      </div>
    </>
  )
}

export default Project