import NoteWrapper from "@/components/NoteWrapper";
import PrivateNote from "@/components/PrivateNote";
import { fetchHandler } from "@/lib/fetch_handler";
import { INote } from "@/types";
import { Metadata } from "next";

export async function generateMetadata(
  { params }: {params: {note: string}},
): Promise<Metadata> {
  return {
    title: "#"+params.note,
  }
}

export default async function Notes({ params }: { params: { note: string } }) {
  const { data, secured } = await fetchHandler(
    `${process.env.PAGE_URL}/api/notes/${params.note}`,{},
    { data: {}, secured: false },
  );

  return (
    <>
      {secured ? (
        <PrivateNote id={params.note} />
      ) : (
        <NoteWrapper {...(data as INote)} />
      )}
    </>
  );
}
