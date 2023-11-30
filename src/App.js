
import './App.css';
import { TextField,Stack,Button} from '@mui/material';
import { useState } from 'react';

function App() {

  const[total,setTotal]=useState(0)
  const[principle,setPrinciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[time,setTime]=useState(0)
  const[validPriciple,setValidPrinciple]=useState(true)
  const[validRate,setValidRate]=useState(true)
  const[validTime,setValidTime]=useState(true)

   function handleSubmit(e){
    e.preventDefault()
    if(!principle || !rate || !time){
      alert("Enter valid value")
    }
    else{
      let a=principle*rate/100 *time
      setTotal(a)
    }
  }

  const validateInput=(e)=>{
    const {name,value}=e.target
    console.log(!!value.match(/^[0-9]{1,}$/))

    if(!!value.match(/^[0-9]{1,}$/)){
      if(name=='principle'){
        setPrinciple(value)
        setValidPrinciple(true)
      }
      else if(name=='rate'){
        setRate(value)
        setValidRate(true)
      }
      else{
        setTime(value)
        setValidTime(true)
      }
    }
    else{
      if(name=='principle'){
        setPrinciple(value)
        setValidPrinciple(false)

      }
      else if(name=='rate'){
        setRate(value)
        setValidRate(false)
      }
      else{
        setTime(value)
        setValidTime(false)
      }
    }
  }
  

  const clear=()=>{
    setPrinciple(0)
    setRate(0)
    setTime(0)
    setTotal(0)
    setValidPrinciple(true)
    setValidRate(true)
    setValidTime(true)
    
  }




  return (
    <div style={{height:'100vh'}} className=" w-100 d-flex justify-content-center align-items-center  bg-dark">
      <div className='bg-light p-5 rounded' >
      <h1>Simple interest app</h1>
      <p>Calculate your simple interest easily!</p>
      <div style={{backgroundColor:'#ebdb34'}} className='text-center rounded'>
        <h4 className='pt-3'> ₹{' '}{total}</h4>
        <p className='pb-3'>Your total interest</p>
      </div>
      <form className='my-5' onSubmit={(event)=>handleSubmit(event)}>
      <div className='mb-3'>
        <TextField id="outlined-basic" label="₹ Principle amount" name='principle' variant="outlined"  className='w-100' value={principle || ''} onChange={(event)=>validateInput(event)}/>
        {

          !validPriciple &&
          <div className='text-danger'>
            *invalid principle amount value

          </div>
        }

        </div>
        <div className='mb-3'>
        <TextField id="outlined-basic" label="Rate of interest (p.a)%"  name='rate' variant="outlined" className='w-100' value={rate|| ''} onChange={(event)=>validateInput(event)}  />
        {

!validRate &&
<div className='text-danger'>
  *invalid rate of interest value

</div>
}

        </div>

        <div className='mb-3'>
        <TextField id="outlined-basic" label="Time period(Year)"  name='time' variant="outlined" className='w-100' value={time || ''} onChange={(event)=>validateInput(event)} />
        {

!validTime &&
<div className='text-danger'>
  *invalid Time value

</div>
}

        </div>
        <Stack spacing={2} direction={'row'}>
        <Button  type="submit" style={{height:'50px',width:'250px'}}  disabled={validPriciple && validRate && validTime ?false:true}variant="contained" className='bg-dark'>Calculate</Button>
        <Button onClick={clear} style={{height:'50px',width:'250px'}} variant="outlined">Reset</Button>


        </Stack>

        
      </form>
     
        
        

       
      
       
      

    

      </div>
      
    </div>
  );
}

export default App;
