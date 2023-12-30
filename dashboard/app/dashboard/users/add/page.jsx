import styles from  "../../../ui/dashboard/users/adduser/adduser.module.css"
import { addUser } from "../../../lib/actions" 

const AddUserPage = () => {
 
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="user name" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="phone" placeholder="phone" name="phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value={false}  >Select Account type</option>
          <option value={true}>Admin</option>
          <option value={false}>User</option> 
        </select>
        <select name="isActive" id="is Active">
          <option value={false} >Select Activity</option>
          <option value={true}>Active</option>
          <option value={false}>Inactive</option> 
        </select> 
        <textarea name="address" id="address" rows="4" placeholder="User Adress"  ></textarea>
        <button type="submit">Post User</button>
      </form>
    </div>

  )
}

export default AddUserPage