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

    </>
  )
}
