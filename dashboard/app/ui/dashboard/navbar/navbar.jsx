"use client";

import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdLogout,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import Image from "next/image";
import { Dropdown } from '../../../ui/dashboard/navbar/dropdown'
import { FaArrowTurnDown } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname;
  const heading = typeof pathname === "string" ? pathname.split("/").pop() : "";

  return (
    <div className={styles.container}>
      <div>
        <Image
          width={100}
          height={26}
          alt="logo"
          src={"/basron llogo.png"}
        />
      </div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch size={18}/>
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} /> 
          <Dropdown/><FaArrowTurnDown className="transform -translate-x-3/4"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;