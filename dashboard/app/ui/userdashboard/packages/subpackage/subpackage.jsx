// import { updatePackage } from "../../../lib/actions";
import styles from "../packages.module.css";
import Button from "../../../uis/button";
import { TiTick } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";

const SubPackage = async (ashan) => {
  // const { id } = params;
  // const packaged = await fetchPackageId(id);

  return (
    <div className={styles.container}>
      <div className={styles.packages}>
        <div className={styles.packageIn}>
          <div className={styles.packageBody}>
            <div className={styles.packageHeader}>
              <h1 className={styles.packageTitle}>{ashan.pkgname}</h1>
              <h3 className={styles.packagePrice}>
                <sup>$</sup>2000 Min
              </h3>
            </div>
            <ul className={styles.packageList}>
              <li className={styles.packageListItemROI}>{ashan.ROI}</li>
              <li className={styles.packageListItem}>
                <TiTick />
                {ashan.duration}
              </li>
              <li className={styles.packageListItem}>
                <TiTick />
                {ashan.min}
              </li>
              <li className={styles.packageListItem}>
                <TiTick />
                {ashan.max}
              </li>
              <li className={styles.packageListItem}>
                {" "}
                {ashan.advisoryes ? (
                  <TiTick />
                ) : ashan.advisorno ? (
                  <MdOutlineClose />
                ) : null}
                {ashan.advisoryes} {ashan.advisorno}
              </li>
              <li className={styles.packageListItem}>
                {ashan.withdrawyes ? (
                  <TiTick />
                ) : ashan.withdrawno ? (
                  <MdOutlineClose />
                ) : null}
                {ashan.withdrawyes} {ashan.withdrawno}
              </li>
            </ul>
            <Button props="Subscribe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPackage;
