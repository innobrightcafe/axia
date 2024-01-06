import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import { FaUser, FaUsers } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import {
  
  MdAnalytics, 
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettingsApplications,
  MdPeople, 
  MdShoppingBag,
  MdSupervisedUserCircle, 
  MdWork,
} from "react-icons/md";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard ",
        icon: <MdDashboard size={15}/>,
        path: "/usersdashboard",
      }, 
      {
        title: "Package",
        icon: <MdShoppingBag size={15}/>,
        path: "/usersdashboard/package",
      },
      {
        title: "Transactions",
        icon: <RiMoneyDollarCircleFill size={15}/>,
        path: "/usersdashboard/transactions",
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        icon: <MdWork size={15}/>,
        path: "userdashboard/revenue",
      },
      {
        title: "Reports",
        icon: <MdAnalytics size={15}/>,
        path: "userdashboard/reports",
      },
      {
        title: "Referrer",
        icon: <FaUsers size={15}/>,
        path: "userdashboard/teams",
      },
    ],
  },
  {
    title: "User ",
    list: [
      {
        title: "Profile",
        icon: <FaUser size={15} />,
        path: "userdashboard/profile",
      },
      {
        title: "help",
        icon: <MdHelpCenter size={15}/>,
        path: "userdashboard/help",
      },
      {
        title: "Settings",
        icon: <MdOutlineSettingsApplications size={15}/>,
        path: "userdashboard/settings",
      }, 
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt="Avatar"
          width="50"
          height="50"
        />
        <div className={styles.userDetails}>
          <span className={styles.username}>ibb</span>
          <span className={styles.userTitle}>admin</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.signout} ><MdLogout size={15}/>Signout</button>
    </div>
  );
};

export default Sidebar;
