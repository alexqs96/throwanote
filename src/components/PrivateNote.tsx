'use client'
import { useRef, useState } from "react"
import { KeyLogo } from "./Icons"
import NoteWrapper from "./NoteWrapper"
import { postHandler } from "@/lib/fetch_handler"
import { INote, IResponseApi } from "@/types"

const PrivateNote = ({id}: {id: string}) => {
  const [note, setNote] = useState({
    data: null,
    message: ""
  })
  const secret = useRef<HTMLInputElement>(null)

  async function getPrivateNote() {
    if (secret?.current?.value) {
      const data = await postHandler(
        `/api/notes/${id}`,
        { secret: secret?.current?.value },
        { data: null, message: "Hubo un error en el servidor" },
      );

      setNote(data as IResponseApi)
    }

    return null;
  }

  return (
    <>
      {
        note.data?
        <NoteWrapper {...note.data as INote} />
        :
        <>
        {
          note.message?
            <p className="bg-red-200 text-red-500 py-2 px-4 rounded w-fit mx-auto text-3xl mb-5">{note.message}</p>
            :
            null
        }

        <div className="py-6 px-10 note bg-white/70 mx-auto w-full max-w-md">
          <p className="text-2xl mb-3">Ingresa la clave</p>
          <div className="flex items-center w-full border border-black rounded-lg overflow-hidden">
            <input
              className="bg-transparent p-2 w-full outline-none text-lg"
              onKeyDown={e => e.key === "Enter" ? getPrivateNote() : null}
              ref={secret}
              type="text"
            />
            <button onClick={() => getPrivateNote()} className="bg-black p-2">
              <KeyLogo size={32} className="fill-white" />
            </button>
          </div>
        </div>
        </>
      }
    </>
  )
}

export default PrivateNote
