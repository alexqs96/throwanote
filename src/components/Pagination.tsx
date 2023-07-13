"use client";
import Link from "next/link";

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
  const amountPages = Math.ceil(amount / limit);
  const actualPage = page > amountPages ? amountPages : page;
  let startPage = Math.max(1, actualPage - 1);
  let endPage = Math.min(startPage + 2, amountPages);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  return (
    <>
      <div className="w-full flex justify-center gap-2 my-10">
        <Link
          href={
            "/notes?" +
            (search ? "search=" + search + "&" : "") +
            ("page=" + (page - 1 > 0 ? page - 1 : 1))
          }
          className="note py-2 px-3 flex items-center"
        >
          {"<"}
        </Link>

        {pages.map((num) => (
          <Link
            href={
              "/notes?" +
              (search ? "search=" + search + "&" : "") +
              ("page=" + num)
            }
            className={
              "py-2 px-3 note flex items-center transition-transform duration-200 " +
              (actualPage === num ? "text-2xl scale-110" : "")
            }
            key={num}
          >
            {num}
          </Link>
        ))}

        <Link
          href={
            "/notes?" +
            (search ? "search=" + search + "&" : "") +
            ("page=" + (page + 1 > amountPages ? amountPages : page + 1))
          }
          className="py-2 px-3 note flex items-center"
        >
          {">"}
        </Link>
      </div>
    </>
  );
};

export default Pagination;
