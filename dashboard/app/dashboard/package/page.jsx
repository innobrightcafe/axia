import Search from "../../ui/dashboard/search/search";
import Button from "../../ui/uis/button";
import Image from "next/image";
import Link from "next/link";
import styles from "../../ui/dashboard/packages/packages.module.css";
import Pagination from "../../ui/dashboard/pagination/pagination"; 
import { deletePackage, fetchPackage} from "../../lib/actions";  



 const PackagePage = async ({ searchParams }) => {
  try {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    console.log(q)
    const { paginatedData, totalPage } = await fetchPackage(q, page); 

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="search users..." />
          <Link href="/dashboard/package/add">
            <Button props="Add New" />
          </Link>
        </div>
        
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Packages</th>
              <th>Description</th>
              <th>Amount</th>
              <th>ROI</th>
              <th>period</th>
              <th>Date</th> 
              <th>Action</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {paginatedData.map((pkg) => (
              <tr key={pkg.id}>
                <td>
                  <div className={styles.packages}>
                    <Image
                      src={pkg.img || "/undraw_bitcoin_p2p_re_1xqa.svg"}
                      alt="package"
                      width={40}
                      height={40}
                      className={styles.packageImage}
                    />
                    {pkg.packageName}
                  </div>
                </td>
                <td> {pkg.description}</td>
                <td>{pkg.amount}</td>
                <td>{pkg.ROI}%</td>
                <td>{pkg.period}Days</td>
                <td>{pkg.investmentDate?.toString().slice(4, 16)}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/package/${pkg.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <form action={deletePackage}>
                      <input type="hidden" name="id" value={pkg.id} />
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
        <Pagination totalPage={totalPage} />
      </div>
    </div>
  );
}catch (error) {
  console.error("Error fetching users:", error.message); 
  return (
    <div className={styles.errorMessage}>
      <p>We are having problem getting your data. Please refresh page.</p>
    </div>
  );
}
};

export default PackagePage;
