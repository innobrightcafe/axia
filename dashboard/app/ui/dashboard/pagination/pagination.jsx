'use client'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'
import styles from './pagination.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Pagination = ({ totalPage }) => { 
  const searchParams = useSearchParams()
  const router = useRouter();
  const parthName = usePathname()
  const q = searchParams?.get('q') || '';
  const page = searchParams?.get('page') || 1; 

  const params = new URLSearchParams(searchParams)
  const PER_PAGE = 3

  const hasPrev = PER_PAGE * (parseInt(page)- 1) > 0
  const hasNext = PER_PAGE * (parseInt(page)- 1) + PER_PAGE < totalPage

  const handleChangePage = (type) => {
    console.log('Changing page:', type)
     type === 'prev'
      ? params.set('page', parseInt(page) -1)
      : params.set('page', parseInt(page) +1)
    router.push(`${parthName}?${params.toString()}`)
  }
  return (
    <div className={styles.container}>
        <button className={styles.button} disabled={!hasPrev} onClick={()=>handleChangePage("prev")} ><MdArrowLeft className={styles.icon}/> Prev</button>
        <button className={styles.button} disabled={!hasNext} onClick={()=>handleChangePage("next")}>Next<MdArrowRight className={styles.icon}/></button>
    </div>
  )
}

export default Pagination