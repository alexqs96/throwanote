'use client'
import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ExpandHeight from '@/helpers/expandHeight';
import { useState } from 'react';

interface createResponse {
  message: string;
  status: number;
  statusText: string;
}

const FormValues = z.object({
  id: z.string().min(4).max(80),
  content: z.string().min(4),
  secret: z.string().min(4).nullable(),
  edit: z.string().min(4).nullable(),
});

const CreatePost = () => {
  const [privateState, setPrivateState] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormValues),
    defaultValues: {
      secret: null,
      edit: null,
    },
  });

  type FormData = z.infer<typeof FormValues>;

  const postNote = "Postear"
  const postingNote = "Posteando nota..."

  const onSubmit = async (data: FormData) => {
    let sendButton: HTMLButtonElement = document.querySelector("button[type='submit']")!;

    if (sendButton) {
      sendButton.setAttribute("disabled", "true");
      sendButton.textContent = postingNote

      try {
        const res = await fetch("/api/notes", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })

        if (res.status === 200) {
          const response: createResponse = await res.json()

          sendButton.textContent = response.message

          setTimeout(() => {  
            sendButton.removeAttribute("disabled");
            sendButton.textContent = postNote
          }, 4000);
        }
        else
        {
          const response: createResponse = await res.json()

          sendButton.classList.add("notsent");
          sendButton.textContent = response.message

          setTimeout(() => {  
            sendButton.removeAttribute("disabled");
            sendButton.classList.remove("notsent");
            sendButton.textContent = postNote
          }, 4000);
        }
      } catch (error : any) {
        console.log(error);
        sendButton.classList.add("notsent");
        sendButton.textContent = "Error en el servidor"
        setTimeout(() => {
          sendButton.removeAttribute("disabled");
          sendButton.classList.remove("notsent");
          sendButton.textContent = postNote
        }, 4000);
      }
    }
  };

  return (
    <>
        <form
          className="flex flex-col w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="font-semibold text-2xl flex whitespace-nowrap items-center" htmlFor="id">
            ID: # 
            <input
              id="id"
              className="ml-2 py-2 bg-transparent outline-none w-full placeholder-black/50"
              placeholder='ingresa un id'
              type="text"
              {...register("id", { required: true, minLength: 4 })}
            />
          </label>
          {errors.id && (
            <p className="text-pink-700 p-1 px-2 bg-red-100 text-lg font-semibold reveal w-fit rounded selection:bg-red-300">
              Ingresa un Id valido
            </p>
          )}

          <label className="font-semibold text-2xl mt-6" htmlFor="content">
            Nota:
          </label>
          <textarea
            id="content"
            className="resize-none text-2xl h-[220px] bg-transparent outline-none placeholder-black/50"
            placeholder='...Aa'
            {...register("content", { required: true, minLength: 4 })}
          />
          {errors.content && (
            <p className="text-pink-700 p-1 px-2 bg-red-100 text-lg font-semibold mt-2 reveal w-fit rounded selection:bg-red-300">
              Escribi una nota 
            </p>
          )}

          <div className="w-fit flex border bg-white mt-2">
            <button className={"px-3 py-2 " + (!privateState? "bg-black text-white" : '')} type="button" onClick={() => {setPrivateState(false), setValue('secret', null)}}>Publica</button>
            <button className={"px-3 py-2 " + (privateState? "bg-black text-white" : '')} type="button" onClick={() => {setPrivateState(true), setValue('secret', "")}}>Privada</button>
          </div>

          {
            privateState?
            <>
              <label className="font-semibold text-2xl mt-3 mb-0.5 flex items-center whitespace-nowrap" htmlFor="secret">
                Clave: 
                <input
                  id="secret"
                  className="ml-2 py-2 bg-transparent outline-none w-full placeholder-black/50"
                  placeholder='escribi una clave'
                  type="text"
                  {...register("secret", { required: true, minLength: 4 })}
                />
              </label>
              {errors.secret && (
                <p className="text-pink-700 p-1 px-2 bg-red-100 text-lg font-semibold mt-2 reveal w-fit rounded selection:bg-red-300">
                  Ingresa una clave 
                </p>
              )}
            </>
            :
            null
          }

          <label className="font-semibold text-2xl mt-3 mb-0.5 flex items-center whitespace-nowrap" htmlFor="edit">
            Clave de Edición: 
            <input
              id="edit"
              className="ml-2 py-2 bg-transparent outline-none w-full placeholder-black/50"
              placeholder='escribi una clave'
              type="text"
              {...register("edit", { required: true, minLength: 4 })}
            />
          </label>

          <button
            onClick={() => ExpandHeight()}
            aria-label="post note button"
            type="submit"
            className={
              "bg-black rounded text-white text-xl py-2.5 px-4 w-fit h-fit mr-auto mt-2"
            }
          >
            Postear Nota
          </button>
        </form>
    </>
  )
}

export default CreatePost
