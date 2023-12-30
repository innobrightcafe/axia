import { updateUser } from "../../../lib/actions";
import { fetchUserId } from "../../../lib/data";
import styles from "../../../ui/dashboard/users/SingleUser/SingleUser.module.css";
import Image from "next/image"; 

const SingleUserPage = async ({params}) => {
  const { id } = params 
  const user = await fetchUserId(id);


  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src=  {user.img || "/noavatar.png"} alt="user" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={user.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder={user.password}
          />
          <label htmlFor="phone">Phone</label>
          <input type="phone" name="phone" id="phone" placeholder="phone" />
          <label htmlFor="address">Address</label>
          <textarea
            type="text"
            name="adress"
            id="address"
            placeholder={user.address}
          />
          <label htmlFor="isAdmin">Account type</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>Admin</option>
            <option value={false} selected={!user.isAdmin}>user</option>
          </select>
          <label htmlFor="Activity"></label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>Active</option>
            <option value={false} selected={!user.isInactive}>Inactive</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
