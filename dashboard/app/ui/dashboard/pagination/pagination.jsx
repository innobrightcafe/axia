'use client'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'
import styles from './pagination.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Pagination = ({total_page }) => { 
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const parthName = usePathname()
  const q = searchParams?.get('q') || '';
  const page = searchParams?.get('page') || 1; 

  const params = new URLSearchParams(searchParams)
  const PER_PAGE = 3

  const hasPrev = PER_PAGE * (parseInt(page)- 1) > 0
  const hasNext = PER_PAGE * (parseInt(page)- 1) + PER_PAGE < total_page

  const handleChangePage = (type) => {
     type === 'prev'
      ? params.set('page', parseInt(page) -1)
      : params.set('page', parseInt(page) +1)
    replace(`${parthName}?${params.toString()}`)
  }
  return (
    <div className={styles.container}>
        <button className={styles.button} disabled={!hasPrev} onClick={()=>handleChangePage("prev")} ><MdArrowLeft/> Prev</button>
        <button className={styles.button} disabled={!hasNext} onClick={()=>handleChangePage("next")}>Next<MdArrowRight/></button>
    </div>
  )
}

export default Pagination