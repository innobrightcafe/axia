import Search from "../../ui/dashboard/search/search";
import Button from "../../ui/uis/button";
import Image from "next/image";
import Link from "next/link";
import styles from "../../ui/dashboard/packages/packages.module.css";
import Pagination from "../../ui/dashboard/pagination/pagination"; 
import { deletePackage } from "../../lib/actions"; 
import { fetchDataFromAPI } from "../../lib/fetchData";



 const PackagePage = async ( ) => {
//   const q = searchParams?.q || "";
//   const page = searchParams?.page || 1;
//   const { total_page } = await fetchDataFromAPI(q, page);
  const fetchdata = await fetchDataFromAPI()
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
          {fetchdata.map((pkg) => (
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
        <Pagination total_page={total_page} />
      </div>
    </div>
  );
};

export default PackagePage;
