import { fetchHandler } from "@/lib/fetch_handler";
import { Metadata } from "next";
import NotesWrapper from "@/components/NotesWrapper";

export async function generateMetadata(
  { searchParams }: {searchParams: {search: string}},
): Promise<Metadata> {
  if (searchParams.search) {
    return {
      title: "Notas: "+searchParams.search,
    }  
  }

  return {
    title: "Notas"
  }
}

export default async function Notes({
  searchParams,
}: {
  searchParams: { page: number; search: string };
}) {
  const { data, amount } = await fetchHandler(
    `${process.env.PAGE_URL}/api/notes?`,
    {
      ...searchParams
    }
    ,
    {
      data: [],
      amount: 1,
    },
  );

  return (
    <>
    {
      data?
      <NotesWrapper data={data} amount={+amount} searchParams={searchParams} />
      :
      null
    }
    </>
  );
}
