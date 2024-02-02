// import { updatePackage } from "../../../lib/actions";
import styles from "../../ui/userdashboard/packages/packages.module.css";
import SubPackage from "../../ui/userdashboard/packages/subpackage/subpackage";
const UserPAckage = async () => {
  // const { id } = params;
  // const packaged = await fetchPackageId(id);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Packages</h2>
      <div className={styles.packages}>
        <SubPackage pkgname="Real Eeste I" ROI="ROI: 20%" duration="Duration: 6 months" min="Min Capital: $2000" max="Max Capital: $200000" advisor="Personal Advisor" advisorno="Personal Advisor" withdrawno="Withdraw any time"/>
        <SubPackage pkgname="Real Eeste II" ROI="ROI: 20%" duration="Duration: 6 months" min="Min Capital: $2000" max="Max Capital: $200000" advisoryes="Personal Advisor" withdrawyes="Withdraw any time"/>
        <SubPackage pkgname="Auto Trading I" ROI="ROI: 20%" duration="Duration: 6 months" min="Min Capital: $2000" max="Max Capital: $200000" advisorno="Personal Advisor" withdrawno="Withdraw any time"/> 
      </div>
      <div className={styles.packages}>
        <SubPackage pkgname=" Auto Trading II" ROI="ROI: 20%" duration="Duration: 6 months" min="Min Capital: $2000" max="Max Capital: $200000" advisoryes="Personal Advisor " withdrawyes="Withdraw any time" />
        <SubPackage pkgname=" Gold Trading I" ROI="ROI: 20%" duration="Duration: 6 months" min="Min Capital: $2000" max="Max Capital: $200000" advisorno="Personal Advisor" withdrawno= "Withdraw any time" />
        <SubPackage pkgname=" Gold Trading II" ROI="ROI: 20%" duration="Duration: 6 months" min="Min Capital: $2000" max="Max Capital: $200000" advisoryes="Personal Advisor" withdrawyes="Withdraw any time"/>
         
      </div>
    </div>
  );
};

export default UserPAckage;
