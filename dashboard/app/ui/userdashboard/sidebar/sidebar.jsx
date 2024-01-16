import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import { FaBriefcase, FaMoneyBill1, FaMoneyBillTransfer, FaMoneyBillTrendUp, FaSackDollar, FaUser, FaUsers } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import {
  
  MdAnalytics, 
  MdAttachMoney, 
  MdBarChart, 
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdNoTransfer,
  MdOutlineSettingsApplications, 
  MdShoppingBag, 
  MdWork,
} from "react-icons/md";
const menuItems = [
  {
    title: "General Information",
    list: [
      {
        title: "Dashboard ",
        icon: <MdDashboard size={15}/>,
        path: "/usersdashboard",
      },
      {
        title: "Transactions",
        icon: <RiMoneyDollarCircleFill size={15}/>,
        path: "/usersdashboard/transactions",
      }, 
      
    ],
  },

  {
    title: "Invest",
    list: [
      {
        title: "Package",
        icon: <MdShoppingBag size={15}/>,
        path: "/usersdashboard/package",
      },
      {
        title: "Invest History",
        icon: <MdBarChart size={15}/>,
        path: "/usersdashboard/investment",
      },
      
    ],
  },
  {
    title: "Transfer $ Withdraw",
    list: [
      {
        title: "Transfer",
        icon: <FaMoneyBillTransfer size={15}/>,
        path: "usersdashboard/transfer",
      },
      {
        title: "Withdraw",
        icon: <FaSackDollar size={15}/>,
        path: "usersdashboard/withdraw",
      },
      {
        title: "recieve Money",
        icon: <FaMoneyBill1 size={15}/>,
        path: "usersdashboard/recievemoney",
      },
    ],
  },

  {
    title: "Deposits & Payouts",
    list: [
      {
        title: "create Deposit",
        icon: <FaBriefcase size={15}/>,
        path: "usersdashboard/deposits",
      },
      {
        title: "Payouts",
        icon: <FaMoneyBill1 size={15}/>,
        path: "usersdashboard/payouts",
      }, 
      {
        title: "Payout History",
        icon: <FaMoneyBillTrendUp size={15}/>,
        path: "usersdashboard/payouthistory",
      },
    ],
  },
  {
    title: "User ",
    list: [
      {
        title: "Profile",
        icon: <FaUser size={15} />,
        path: "usersdashboard/profile",
      },
      {
        title: "help",
        icon: <MdHelpCenter size={15}/>,
        path: "usersdashboard/help",
      },
      {
        title: "Settings",
        icon: <MdOutlineSettingsApplications size={15}/>,
        path: "usersdashboard/settings",
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
