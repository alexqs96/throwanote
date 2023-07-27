import { Children } from "react"

function Loading() {
  const skeleton = Array.from({ length: 10 })

  return (
    <div className="flex flex-wrap gap-4 mt-6">
    {
      Children.toArray(
        skeleton.map(e =>(
          <div
            className="note animate-pulse cursor-pointer w-full max-w-[300px] p-4 flex flex-col gap-5 text-lg group transition-transform duration-200 hover:scale-105"
          >
            <p className="text-xl">#cargando</p>
            <p className="truncate">.....</p>
            <p className="ml-auto group-hover:mr-3 duration-200">
              ver mas...
            </p>
          </div>
        ))
      )
    }
    </div>
  )
}

export default Loading