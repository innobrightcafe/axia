import { addPackage } from "../../../lib/actions"
import styles from  "../../../ui/dashboard/packages/addpackage/addpackage.module.css"

const AddPackagePage = async () => {
  const pkg = await addPackage()
  return (
    <div className={styles.container}>
      <form action={addPackage} className={styles.form}>
      <input type="hidden" placeholder="email" name="email" value='innobrightcafe@gmail.com' required />
        <input type="text" placeholder="Package Name" name="packageName" required />
        <input type="text" placeholder="Package Period" name="period" required />
        <input type="text" placeholder="Investment Amount" name="amount" required />
        <input type="text" placeholder="Return On Investment" name="ROI" required />
        <textarea name="description" id="desc" rows="6" placeholder="Package Description"  ></textarea>
        <button type="submit">Post Package</button>
      </form>
    </div>

  )
}

export default AddPackagePage