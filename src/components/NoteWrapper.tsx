'use client'
import Linkify from "react-linkify"
import { INote } from "@/types"

const NoteWrapper = (data: INote) => {

  return (
    <div className="flex flex-col gap-6">
      <p className="text-4xl">#{data.id}</p>
      <Linkify>
        <p className="text-2xl leading-snug whitespace-pre-wrap">{data.content}</p>
      </Linkify>
    </div>
  )
}

export default NoteWrapper
