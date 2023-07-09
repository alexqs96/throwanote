'use client'
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  
  const itemVariants = {
      hidden: {
          opacity: 0,
          scale: 0.5,
          transition: { type: "spring", bounce: 0.4 }
      },
      show: { 
        opacity: 1,
        scale: 1,
        transition: { type: "spring", bounce: 0.4 } 
      }
  };

  return (
    <>
    <div className="overflow-hidden flex flex-col gap-20 items-center h-full">
      <AnimatePresence mode="wait">
        <motion.article
          className="flex justify-around gap-10 flex-wrap items-center w-full py-10"
          key="note1"
          variants={itemVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <h1 className="text-7xl leading-tight max-w-xl text-center">
            Crea notas <mark>anonimamente</mark> y compartilas en Throw a Note
          </h1>

          <div className="note cursor-pointer p-8 flex flex-col gap-5 hover:-rotate-3">
            <p className="text-6xl">#S30</p>
            <p className="text-center max-w-sm text-4xl">
              Subi tu nota a throw a note y unite a las demas notas{" "}
              <mark>anonimas.</mark>
            </p>
          </div>
        </motion.article>

        <motion.article
          className="flex flex-row-reverse justify-around gap-10 flex-wrap items-center w-full py-10"
          key="note2"
          variants={itemVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <p className="text-7xl leading-tight max-w-xl text-center">
            Publica con la funcion <mark>Privada</mark> y asegura tu nota con una clave{" "}
            <mark>{":)"}</mark>
          </p>
          <div className="note cursor-pointer p-8 flex flex-col gap-5 hover:-rotate-3">
            <p className="text-6xl">#964</p>
            <p className="text-center max-w-sm text-4xl">
              Ingresa en el buscador #964 y accede con la clave: blackbird, tu nota privada en throw a note{" "}
              <mark>{":)"}</mark>.
            </p>
          </div>
        </motion.article>

        <motion.section
          className="flex flex-col items-center text-center gap-20 py-10"
          key="note3"
          variants={itemVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <p className="text-6xl max-w-lg">¿Listo para subir una nota?</p>
          <Link href='/post' className="text-white bg-black p-7 text-5xl">Postear una Nota</Link>

          <p className="text-6xl max-w-lg">Te invitamos a ver las notas de la comunidad</p>
          <Link href='/notes' className="text-white bg-black p-7 text-5xl">Notas Publicadas</Link>
        </motion.section>
      </AnimatePresence>
    </div>
    </>
  )
}
