import { useState, useEffect } from 'react';
import Select from 'react-select';

import './Form.css'

const options = [
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'JS', label: 'JS' },
  {value:"Java",label:"Java"},
  {value:"Python",label:"Python"},
  {value:"C++",label:"C++"}


]

const Form = ()=>{
    const [formValues, setFromValues] = useState({"name":"","email":"","password":""})
    const [select, setSelect] = useState([])
    const [selectPlaceHolder, setSelectPlaceHolder] = useState("Choose Skills")
    const [active, setActive] = useState(false)
    const [info,setInfo]= useState("Try it free 7 days then ₹180/mo. thereafter")
    const handleChange = (e)=>{
        setFromValues({...formValues,[e.target.name]:e.target.value})
    }
    

    const handleSelect = (e)=>{
         e.map((item)=>{
             console.log(item)
             setSelect((prev)=>[...prev,{...item}])
         })
        setSelect([...e])
        console.log(e)  
        console.log(select)
    }

    const claimTrial= ()=>{
        setInfo("You have successfully subscribed to our plan")
        setFromValues({"name":"","email":"","password":""})
        setSelect([])
        setActive(false)
        setSelectPlaceHolder((prev)=>prev)
    }

     const isFromSubmit =()=>{
            if(formValues.length === 0){
                return false
            }else {
                return true
            }
        }
        
    useEffect(()=>{
        if(select.length > 0 && isFromSubmit()){
            setActive(true)
        }
    },[select,formValues])

   

    return (
     <div className='wrapper'>
         <div className='container'>
            <h1>Learn to code by watching others</h1>
            <p>See how experienced developers solve problems in real-time.
          Watching scripted tutorials is great, but understanding how
          developers think is invaluable.</p>
         </div>

         <div className='form'>
            <div className='info'>{info}</div>
        
            <form>
                <div className='ui-form'>
                    <div className='field'>
                        <input type="text" name='username' placeholder='Username' value={formValues.username} onChange={handleChange} />
                        <br/>
                        <input type="email" name='email' placeholder='Email' value={formValues.email} onChange={handleChange}/>
                        <br/>
                        <input type="password" name='password' placeholder='Password' value={formValues.password} onChange={handleChange}/>
                        <Select className='form-select' options={options}  placeholder={selectPlaceHolder} onChange={handleSelect} isMulti value={select}  isClearable={true} hideSelectedOptions={true}/>
                        {active?<button className='form-button-active'   onClick={claimTrial}>CLAIM YOUR FREE TRIAL</button>:<button className='form-button'>CLAIM YOUR FREE TRIAL</button>}
                     <div className='disclaimer'>By clicking the button you are agreeing to our <span style={{color:"red"}}>Terms and Services</span></div>
                    </div>
                </div>

            </form>
         </div>
     </div>
    )
}
export default Form