
import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState ( 
    {fName:'', lName:'', gender:'', country:'', email:'', phone:'', cloudComputing:false, webDev:false, 
      dataScience:false, machineLearning:false, mode:'', comment:''
    } 
  );


  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type ==="checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className='w-[100vw] mx-auto'>
      <form onSubmit={submitHandler}
      className=' mx-10 my-6'
      >
        <label htmlFor='fName' className=' text-blue-400'>First Name</label> <br/>
        <input 
          type="text"
          placeholder='Enter First Name'
          required
          name='fName'
          id='fName'
          value={formData.fName}
          onChange={changeHandler}
          className=' border-2 border-slate-400'
        />

        <br/>

        <label htmlFor='lName'>Last Name</label> <br/>
        <input
          type="text"
          placeholder='Enter Last Name'
          name='lName'
          id='lName'
          value={formData.lName}
          onChange={changeHandler}
          className=' border-2 border-slate-400'
        />

        <br/>

        <label htmlFor='gender'>Gender</label>
        <select
          name='gender'
          id='gender'
          value={formData.gender}
          onChange={changeHandler}
          className=' border-2 border-slate-400'
        >
          <option defaultValue='select'>Select</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select>

        <br/>

        <label htmlFor='country'>Country</label>
        <select
          name='country'
          id='country'
          value={formData.country}
          onChange={changeHandler}
          className=' border-2 border-slate-400'
        >
          <option defaultValue='select'>Select</option>
          <option value='india'>India</option>
          <option value='usa'>USA</option>
          <option value='england'>England</option>
          <option value='china'>China</option>
          <option value='other'>Other</option>
        </select>

        <br/>

        <label htmlFor='email'>Email</label> <br/>
        <input 
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
          value={formData.email}
          onChange={changeHandler}
          className=' border-2 border-slate-400'
        />

        <br/>

        <label htmlFor='phone'>Phone</label> <br/>
        <input 
          type='tel'
          id='phone'
          name='phone'
          placeholder='Enter your phone'
          value={formData.phone}
          onChange={changeHandler}
          className=' border-2 border-slate-400'
        />
        <fieldset>
          <legend>Select Your Courses</legend>
          <input 
            type='checkbox' name='cloudComputing' id='cloud'
            onChange={changeHandler} checked={formData.cloudComputing}
          />
          <label htmlFor='cloud'>Cloud Computing</label> <br/>

          <input 
            type='checkbox' name='webDev' id='web'
            onChange={changeHandler} checked={formData.webDev}
          />
          <label htmlFor='web'>Web Development</label> <br/>

          <input 
            type='checkbox' name='dataScience' id='data'
            onChange={changeHandler} checked={formData.dataScience}
          />
          <label htmlFor='data'>Data Science</label> <br/>

          <input 
            type='checkbox' name='machineLearning' id='machine'
            onChange={changeHandler} checked={formData.machineLearning}
          />
          <label htmlFor='machine'>Machine Learning</label> 
        </fieldset> <br/>
        
        <fieldset>
          <legend>Select Mode</legend>
          <input type='radio' name='mode' id='online-mode' value='online-mode'
            onChange={changeHandler} checked={formData.mode==='online-mode'}
          />
          <label htmlFor='online-mode'>Online Mode</label> <br/>

          <input type='radio' name='mode' id='offline-mode' value='offline-mode'
            onChange={changeHandler} checked={formData.mode==='offline-mode'}
          />
          <label htmlFor='offline-mode'>Offline Mode</label> 
        </fieldset> <br/>

        <textarea placeholder='Enter your comments' name='comment'
          id='comment' value={formData.comment} onChange={changeHandler}
          className=' border-2 border-slate-400'
        /> <br/>

        <button className=' border-2 border-slate-400'>Submit</button>

      </form>
    </div>
  );
}

export default App;
