
import Head from 'next/head'
import styles from '../styles/produto.module.css';
import ProdCalculo from './components/ProdCalculo';


const Produto = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Produto</title>
        
        
      </Head>
      <header className={styles.headerArea}>
        <div className={styles.hort}>
        <img src="temp/hort.png" alt="" />
        </div>
        <div className={styles.Title}>
          Produto
        </div>
        
        <div className={styles.Bgheader}>
          <img src="temp/efeito.png" alt="" />
          
        </div>
      
      </header>
      <div className={styles.image}> 
      <img src="temp/votoran.jpg" alt="" />
      </div>
      <div className={styles.textA}>Tradicional</div>
      <div className={styles.textB}> Cimento Votoran</div>
      <div className={styles.line}></div>
      <img src= "temp/Line.png" alt=""/>

      <ProdCalculo/>

    </div>
  )
}

export default Produto
