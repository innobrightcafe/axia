"use client"
import { useRouter } from "next/navigation"

const Modalbutton = ({children, mode="redirect",asChild}) => {
    const router = useRouter() 
  const onClick = () => {
    router.push("/login")
  }

  if (mode === "modal") {
    return (
        <span>
            TODO: implememnt modal
        </span>
    )
  }
    return (
    <div onClick={onClick} className='cursor-pointer'>
        {children}
    </div>

  )
}

export default Modalbutton