export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="*:font-inter"> {children}</main>
}
