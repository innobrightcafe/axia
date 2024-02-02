import { fetchUsers, updateUser } from "../../../lib/actions";
import styles from "../../../ui/dashboard/users/SingleUser/SingleUser.module.css";
import Image from "next/image"; 

const SingleUserPage = async () => {  
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { total_page } = await fetchDataFromAPI(q, page);

const users = await fetchDataFromAPI(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src=  {user.img || "/noavatar.png"} alt="user" fill />
        </div>
        {users.usersname}
      </div>
      <div className={styles.formContainer}>
        <form action={updateusers} className={styles.form}>
          <input type="hidden" name="id" value={users.id} />
          <label htmlFor="usersname">usersname</label>
          <input
            type="text"
            name="usersname"
            id="usersname"
            placeholder="name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={users.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder={users.password}
          />
          <label htmlFor="phone">Phone</label>
          <input type="phone" name="phone" id="phone" placeholder="phone" />
          <label htmlFor="address">Address</label>
          <textarea
            type="text"
            name="adress"
            id="address"
            placeholder={users.address}
          />
          <label htmlFor="isAdmin">Account type</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={users.isAdmin}>Admin</option>
            <option value={false} selected={!users.isAdmin}>users</option>
          </select>
          <label htmlFor="Activity"></label>
          <select name="isActive" id="isActive">
            <option value={true} selected={users.isActive}>Active</option>
            <option value={false} selected={!users.isInactive}>Inactive</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
