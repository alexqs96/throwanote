"use client";
import { useRouter } from 'next/navigation'

const Pagination = ({
  search,
  page,
  amount,
  limit,
}: {
  search: string | null;
  page: number;
  amount: number;
  limit: number;
}) => {
  const {push} = useRouter()
  const amountPages = Math.ceil(amount / limit);
  const actualPage = page > amountPages ? amountPages : page;
  let startPage = Math.max(1, actualPage - 1);
  let endPage = Math.min(startPage + 2, amountPages);

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  
  const changePage = (indexPage: number) => {
    setTimeout(() => {
        window.scrollTo(0,0)
    }, 100);
    return push("/notes?" + (search? "search=" + search + "&" : '') + ("page="+indexPage) );
  }

  return (
    <>
      <div className="w-full flex justify-center gap-2 my-10">
        <button
          onClick={() => changePage(page - 1 > 0? page -1 : 1)}
          className="w-10 h-10 note"
        >{"<"}</button>

        {pages.map((num) => (
          <button
            onClick={() => {
              changePage(num)
            }}
            className={
              "w-10 h-10 note transition-transform duration-200 " + (actualPage === num ? "text-2xl scale-110" : "")
            }
            key={num}
            disabled={actualPage === num}
          >
            {num}
          </button>
        ))}

        <button
          onClick={() => changePage(page + 1 > amountPages? amountPages : page + 1)}
          className="w-10 h-10 note"
        >{">"}</button>
      </div>
    </>
  );
};

export default Pagination;
