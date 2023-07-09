'use client'
import Link from "next/link";
import { useRef } from "react";
import { BookLogo, SearchIcon } from "./Icons";
import { useRouter, useSearchParams } from "next/navigation";

const Header = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const searchParams = useSearchParams()
  const { push } = useRouter()

  function search(){
    return push(searchRef?.current?.value? (searchRef?.current?.value).includes("#")? '/notes/'+searchRef?.current?.value.slice(1) : '/notes?search=' + searchRef?.current?.value : '/notes')
  }

  return (
    <header className="md:ml-[15.5%] grid grid-cols-3 place-items-end items-center gap-4 py-7 pr-[3%]">
      <Link
        href="/"
        className="text-center text-3xl md:text-5xl lg:text-6xl -rotate-6 tracking-tighter sm:absolute left-[4%] top-8"
      >
        Throw a Note
      </Link>

      <span className="max-sm:hidden"></span>

      <div className="w-full max-sm:max-w-[180px] flex gap-3 items-center note px-3.5 py-2.5 focus-within:outline-[5px] focus-within:outline-black hover:border-black">
        <Link href="/notes">
          <BookLogo size={24} />
        </Link>
        <input
          onKeyDown={e => e.key === "Enter" ? search() : null}
          ref={searchRef}
          className="bg-transparent w-full outline-none"
          type="text"
          defaultValue={searchParams.get('search') as string}
          placeholder="Buscar..."
        />
        <button onClick={() => search()}>
          <SearchIcon size={24} />
        </button>
      </div>

      <Link href="/post" className="bg-black text-white py-1.5 px-3">
        Crear Nota
      </Link>
    </header>
  );
};

export default Header;
