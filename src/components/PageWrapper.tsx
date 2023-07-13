'use client'
import ExpandHeight from "@/helpers/expandHeight"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, FC, ReactNode } from "react"

interface Props {
  children: ReactNode;
}

export const PageWrapper: FC<Props> = ({ children }) => {
  const pathname = usePathname()
  const querys = useSearchParams()

  useEffect(() => {
    ExpandHeight()
  }, [querys.get('page'), querys.get('search') , pathname])

  return (
    <main className='max-lg:w-[90%] max-md:mx-auto md:ml-[15.5%] mt-5 md:pr-[3%]'>
    {children}
    </main>
  )
}

export default PageWrapper
