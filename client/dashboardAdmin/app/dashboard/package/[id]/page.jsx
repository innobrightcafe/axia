import { updatePackage } from "../../../lib/actions";
import { fetchPackageId } from "../../../lib/data";
import styles from "../../../ui/dashboard/packages/SinglePackage/SinglePackage.module.css";
import Image from "next/image";

const SinglePackagePage = async ({ params }) => {
  const { id } = params;
  const packaged = await fetchPackageId(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={packaged.img || "/noavatar.png"} alt="package" fill />
        </div>
        {packaged.packageName}
      </div>
      <div className={styles.formContainer}>

        <form action={updatePackage} className={styles.form}>
        <input type="hidden" name="id" value={packaged.id} />
          <label htmlFor="packagename">Packagename</label>
          <input
            type="text"
            name="packagename"
            id="packagename"
            placeholder={packaged.packageName}
          />
          <label htmlFor="Description">Description</label>
          <input
            type="textarea"
            name="Description"
            id="Description"
            placeholder={packaged.desc}
          />
          <label htmlFor="Amount">Amount</label>
          <input
            type="text"
            name="Amount"
            id="Amount"
            placeholder={packaged.amount}
          />
          <label htmlFor="ROI">ROI</label>
          <input type="text" name="ROI" id="ROI" placeholder={packaged.roi} />
          <label htmlFor="period">Period</label>
          <input
            type="text"
            name="period"
            id="period"
            placeholder={packaged.period}
          />

          <label htmlFor="Activity"></label>
          <select name="isActive" id="isActive">
            <option value={true} selected={packaged.isActive}>
              Active
            </option>
            <option value={false} selected={!packaged.isInactive}>
              Inactive
            </option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglePackagePage;
