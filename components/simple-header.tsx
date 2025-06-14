import Link from "next/link"

export default function SimpleHeader({ title }: { title: string }) {
  return (
    <header className="border-b bg-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          ← Back to Industries
        </Link>
        <h1 className="text-xl font-bold">{title}</h1>
        <div></div>
      </div>
    </header>
  )
}
