import { MdPlayCircleFilled } from 'react-icons/md'
import styles from './button.module.css'

const Button = ({props}) => {
  return (
    <div>
        <button className={styles.button}>
            <MdPlayCircleFilled className={styles.icon} />
            {props} 
        </button>
    </div>
  )
}

export default Button