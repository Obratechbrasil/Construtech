import styles from '../../styles/Home.module.css';
import { useApi } from '../../libs/useApi';
import { Header } from '../components/Header';
import { InputField } from '../components/InputField';
import { useState } from 'react';
import ButtonEnter from '../components/ButtonEnter';

const Login = () => {
  const api = useApi();

   const handleSearch = (searchValue: string) => {
      console.log ('Voce esta procurando por');
    
   }


   const [email,setEmail] = useState ('');

   const handleSubmit={
     
   }
  return (
    <div className = {styles.container}>
      
    
   


    
    <Header/>

    <InputField placeholder={'Digite seu email  '} value={''} color={''} onChange={function (newValue: string): void {
        throw new Error('Function not implemented.');
      } }/>
      <InputField placeholder={'Digite sua senha '} value={''} color={''} onChange={function (newValue: string): void {
        throw new Error('Function not implemented.');
      } }
      />


      <ButtonEnter
      
      />
    </div>
    
  ); 
}
  export default Login;