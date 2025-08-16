import Link from "next/link"
import Image from "next/image"
// import { Category } from "@/lib/types";
import type { Category } from "@prisma/client"

const SingleItem = ({ item }: { item: Category }) => {
  return (
    <Link href={`/categories/${item.slug}`} className="flex flex-col items-center group">
      <div className="w-[130px] h-[130px] bg-[#F2F3F8]  rounded-full flex items-center justify-center mb-4">
        {item.img && <Image src={item.img || "/placeholder.svg"} alt="Category" width={80} height={80} />}
      </div>

      <div className="flex justify-center">
        <h3 className="inline-block text-base font-medium text-center duration-500 text-dark group-hover:text-blue">
          {item.title}
        </h3>
      </div>
    </Link>
  )
}

export default SingleItem
