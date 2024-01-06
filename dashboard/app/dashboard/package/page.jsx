import Search from "../../ui/dashboard/search/search";
import Button from "../../ui/uis/button";
import Image from "next/image";
import Link from "next/link";
import styles from "../../ui/dashboard/packages/packages.module.css";
import Pagination from "../../ui/dashboard/pagination/pagination"; 
import { deletePackage, fetchPackage } from "../../lib/actions";  



 const PackagePage = async ( ) => {
//   const q = searchParams?.q || "";
//   const page = searchParams?.page || 1;
//   const { total_page } = await fetchDataFromAPI(q, page);
const packageData = await fetchPackage()
  console.log(fetchdata)

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="search users..." />
          <Link href="/dashboard/package/add">
            <Button props="Add New" />
          </Link>
        </div>
        <div className={styles.package}>
          {packageData.map((pkg) => (
            <div className={styles.packageIn} key={pkg.id}>
              <h2>{pkg.packageName}</h2>
              <div className={styles.packageimg}>
                <Image
                  src={pkg.img || "/undraw_bitcoin_p2p_re_1xqa.svg"}
                  alt="user"
                  width={50}
                  height={50}
                  className={styles.packageImage}
                />
              </div>

              <div className={styles.packageBody}>
                <h1>
                  ${pkg.amount} <span> For {pkg.period} days</span>
                </h1>
                <h3>ROI at {pkg.roi}%/M</h3>

                <p>{pkg.desc}</p>
                <Button props="Subscribe" />
              </div>
            </div>
          ))}
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
            {fetchdata.map((pkg) => (
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
                <td> {pkg.desc}</td>
                <td>{pkg.amount}</td>
                <td>{pkg.roi}%</td>
                <td>{pkg.period}Days</td>
                <td>{pkg.createdAt?.toString().slice(4, 16)}</td>
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
        <Pagination total_page={total_page} />
      </div>
    </div>
  );
};

export default PackagePage;
