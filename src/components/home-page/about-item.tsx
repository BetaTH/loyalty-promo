import Image from 'next/image'

type AboutItemProps = {
  cardImgSrc: string
  title: string
  descriptions: string[]
}

export function AboutItem({ cardImgSrc, title, descriptions }: AboutItemProps) {
  return (
    <div className="sm:w-fit flex flex-col gap-4 sm:mx-5 my-4 px-5 sm:px-0">
      <Image
        src={cardImgSrc}
        alt={title}
        width={690}
        height={409}
        sizes="100%"
        priority={true}
        className="w-full sm:w-[24rem]"
      />
      <p className="uppercase text-primary font-medium text-center text-xl sm:text-2xl">
        {title}
      </p>
      <ul className="list-none">
        {descriptions.map((value, idx) => {
          return (
            <li
              key={idx}
              className="max-w-full sm:max-w-[24rem] my-2 sm:my-3 text-base sm:text-xl text-center"
            >
              {value}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
