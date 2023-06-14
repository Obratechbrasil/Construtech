import styles from './styles.module.css'





export const ButtonEnter = () => {
    const handleClick = () => {
      console.log('Botão clicado');
      // Faça algo quando o botão for clicado aqui
    };
  
    return (
      <div>
        <button className={styles.container} onClick={handleClick}>
          <div className={styles.input}>Entrar</div>
        </button>
      </div>
    );
  }                    










export default ButtonEnter ;