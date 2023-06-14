import styles from '../../styles/Home.module.css';
import { SearchInput } from '../components/SearchInput';
import { Banner } from '../components/Banner';
import { ProductItem } from '../components/ProductItem';
import { useApi } from '../../libs/useApi';
import Materialcalc from '../components/Menu';
import Link from 'next/link';
import Menu from '../components/Menu';

const Home = () => {
  const api = useApi();

  const handleSearch = (searchValue: string) => {
    console.log('Você está procurando por', searchValue);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.menu}>
            <Link href="./product/Product/id">
              
            </Link>
          </div>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem Vindo (a) 👋</div>
            <div className={styles.headerSubTitle}>O que você busca para sua obra?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
              
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput mainColor="#D73C0B" onSearch={handleSearch} />
        </div>
      </header>
      <Banner />

      <div className={styles.grid}>
        <ProductItem
        
           
          data={{ id: 1, image: '/temp/okateste.jpg', categoryName: 'Studio Moderno Econômico Completo Para Morar', name: 'Studio', price: 'R$25,000' }}
          mainColor="#D73C0B"
          secondColor="#E7A885"
          
        />
        <ProductItem
          data={{ id: 2, image: '/temp/votoran.jpg', categoryName: 'Cimento', name: 'Cimento Votoran', price: 'R$25,50' }}
          mainColor="#D73C0B"
          secondColor="#E7A885"
        />
        <ProductItem
          data={{ id: 3, image: '/temp/votoran.jpg', categoryName: 'Cimento', name: 'Cimento Votoran', price: 'R$25,50' }}
          mainColor="#D73C0B"
          secondColor="#E7A885"
        />
        <ProductItem
          data={{ id: 4, image: '/temp/votoran.jpg', categoryName: 'Cimento', name: 'Cimento Votoran', price: 'R$25,50' }}
          mainColor="#D73C0B"
          secondColor="#E7A885"
        />
      </div>
    </div>
  );
};

export default Home;


// ESTE É O CATALOGO 