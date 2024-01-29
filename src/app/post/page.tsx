import CreatePost from "@/components/CreatePost";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Crear Nota"
}

export default function PostNote() {
  return(
    <>
    <CreatePost />
    </>
  )
}