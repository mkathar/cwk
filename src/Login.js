import {useState,useEffect} from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Film from './Film'

export default function Login() {
  const [LForm,setLForm]=useState({username:'',password:''});
  //const[Users,setUsers]=useState([{username:'ayşe',password:'muhammed'}])
  /*Mantıken yukarıdaki Users ihtiyaç değil.çünkü giriş yapan kişilerin listesi benim işime
  yaramıyor. anlık olan submit verisi ile kayıt listesinde bulunan veriler eşleşiyor mu bunun kontrolünü yapmalıyım.*/
  const onChangeInput=(e)=>{
    setLForm({...LForm,[e.target.name]:e.target.value})
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    
    if(LForm.username ===''|| LForm.password===''){
      
      return false
    }

   
  }

  return (
    <>
  
    <div className=''>
    <form className="w-full max-w-sm py-52 mx-auto" onSubmit={onSubmit} >
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
        Full Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input onChange={onChangeInput} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300"  name='username'/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
        Password
      </label>
    </div>
    <div className="md:w-2/3">
      <input onChange={onChangeInput} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300" name='password'/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3"></div>
    <label className="md:w-2/3 block text-gray-500 font-bold">
     
    </label>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3 text-white">şifreni mi unutssun</div>
    <div className="md:w-2/3">
      <button className="shadow bg-blue-300 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
        Sign Up
      </button>
    </div>
  </div>
</form>

    </div>
    
  
    
    </>
    
  )
}
