import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
        <Image
                src="/basron llogo.png"
                alt="logo"
                width={50}
                height={18}
            />
            {' '}Project managment</div>
            <div className={styles.text}>All rights reserved.</div>
        
    </div>
  )
}

export default Footer