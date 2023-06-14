import styles from './styles.module.css';


export const Header = () =>{
    return(
        <div className = {styles.container}>
         <div className = {styles.leftSide}>
           
</div>
         <div className = {styles.centeSide}>
            <div className={styles.title}>
                <img src="/temp/obratech1.png" ></img>
            </div>
            <div className={styles.subTitle}></div>
         </div>
         <div className = {styles.rightSide}></div>
        </div>


    )
}