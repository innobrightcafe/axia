 
import Search from "../../ui/dashboard/search/search";
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";
import Button from "../../ui/uis/button";
import Image from "next/image";
import Pagination from "../../ui/dashboard/pagination/pagination"; 
import { deleteUser, fetchUsers } from "../../lib/actions"; 

const UsersPage = async () => {
  // const q = "";  
  // const page = 1;  
  const users = await fetchUsers();
  console.log(users);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="search users..." />
        <Link href="/dashboard/users/add">
          <Button props="Add New" />
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody >
          {users.map((user) => (
            <tr key={user.id} >
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt="user"
                    width={40}
                    height={40}
                    className={styles.userImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td>
                <span>
                  {user.isActive ? (
                    <span className={`${styles.status} ${styles.active} `}>
                      "Active"
                    </span>
                  ) : (
                    <span className={`${styles.status} ${styles.inactive} `}>
                      "Inactive"
                    </span>
                  )}
                </span>
              </td>
              <td>{user.createdAt}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
};

export default UsersPage;