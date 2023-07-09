'use client'
import Pagination from "./Pagination"
import { INote } from "@/types"
import Link from "next/link"
import { Children } from "react"

const NotesWrapper = ({data, amount, searchParams}:{data: any, amount: number, searchParams: {search: string, page: number}}) => {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {data.length ? (
        <>
          {Children.toArray(
            data.map((e: INote) => (
              <Link
                href={"/notes/" + e.id}
                className="note cursor-pointer w-full max-w-[300px] p-4 flex flex-col gap-5 text-lg group transition-transform duration-200 hover:scale-105"
              >
                <p className="text-xl">#{e.id}</p>
                <p className="truncate">{e.preview}</p>
                <p className="ml-auto group-hover:mr-3 duration-200">
                  ver mas...
                </p>
              </Link>
            )),
          )}

          <Pagination
            search={searchParams.search? searchParams.search : null}
            page={searchParams.page ? +searchParams.page : 1}
            amount={amount}
            limit={+10}
          />
        </>
      ) : (
        <div className="text-center mx-auto">
          <p className="text-6xl">Oops</p>
          <p className="text-4xl mt-2">No encontre ninguna nota</p>
        </div>
      )}
    </div>
  )
}

export default NotesWrapper
