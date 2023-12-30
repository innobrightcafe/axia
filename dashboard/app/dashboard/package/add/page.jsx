import { addPackages } from "../../../lib/actions"
import styles from  "../../../ui/dashboard/packages/addpackage/addpackage.module.css"

const AddPackagePage = () => {
  return (
    <div className={styles.container}>
      <form action={addPackages} className={styles.form}>
        <input type="text" placeholder="Package Name" name="packageName" required />
        <input type="text" placeholder="Package Period" name="period" required />
        <input type="text" placeholder="Investment Amount" name="amount" required />
        <input type="text" placeholder="Return On Investment" name="roi" required />
        <textarea name="desc" id="desc" rows="6" placeholder="Package Description"  ></textarea>
        <button type="submit">Post Package</button>
      </form>
    </div>

  )
}

export default AddPackagePage