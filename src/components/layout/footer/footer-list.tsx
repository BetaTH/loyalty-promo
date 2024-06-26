import Link from 'next/link'

interface FooterListProps {
  title: string
  listItems: {
    name: string
    href: string
  }[]
}

export function FooterList({ title, listItems }: FooterListProps) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-semibold sm:text-xl text-lg">{title}</span>
      <ul>
        {listItems.map((item) => (
          <li key={item.name} className="mb-2">
            <Link
              href={item.href}
              className="sm:text-base text-sm hover:text-primary duration-150"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
