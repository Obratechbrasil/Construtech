import Link from 'next/link';
import { Product } from '../../../types/Product';
import styles from './styles.module.css';

type Props = {
    data: Product;
    mainColor:string;
    secondColor:string;
    
}


export const ProductItem = ({data,mainColor,secondColor}: Props) =>{
    return(
        //lembrar de incluir um link atualizado para gerar o id de produto
    <Link href={`/produto/Product/${data.id}`}>  
        <div className={styles.container}>
            <div className ={styles.head}style={{backgroundColor:secondColor}}></div>
            <div className={styles.info}></div>
            <div className= {styles.img}>
            <img src={data.image} alt=""/>
            </div>
               
               <div className={styles.catName}>{data.categoryName}</div> 
               <div className={styles.name}>{data.name}</div>
               <div className={styles.price} style = {{color:mainColor}}>{data.price}</div>
        </div>
    </Link>
    )
}