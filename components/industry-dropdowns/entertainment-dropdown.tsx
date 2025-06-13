import Link from "next/link"

export default function EntertainmentDropdown() {
  return (
    <div className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Genres</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/entertainment/genres/action" className="text-sm hover:underline">
              Action
            </Link>
          </li>
          <li>
            <Link href="/entertainment/genres/comedy" className="text-sm hover:underline">
              Comedy
            </Link>
          </li>
          <li>
            <Link href="/entertainment/genres/drama" className="text-sm hover:underline">
              Drama
            </Link>
          </li>
          <li>
            <Link href="/entertainment/genres/sci-fi" className="text-sm hover:underline">
              Sci-Fi & Fantasy
            </Link>
          </li>
          <li>
            <Link href="/entertainment/genres/documentary" className="text-sm hover:underline">
              Documentary
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Content Categories</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/entertainment/content/movies" className="text-sm hover:underline">
              Movies
            </Link>
          </li>
          <li>
            <Link href="/entertainment/content/tv-shows" className="text-sm hover:underline">
              TV Shows
            </Link>
          </li>
          <li>
            <Link href="/entertainment/content/documentaries" className="text-sm hover:underline">
              Documentaries
            </Link>
          </li>
          <li>
            <Link href="/entertainment/content/kids" className="text-sm hover:underline">
              Kids & Family
            </Link>
          </li>
          <li>
            <Link href="/entertainment/content/originals" className="text-sm hover:underline">
              Original Content
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">Browse Options</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/entertainment/browse/new-releases" className="text-sm hover:underline">
              New Releases
            </Link>
          </li>
          <li>
            <Link href="/entertainment/browse/popular" className="text-sm hover:underline">
              Popular Now
            </Link>
          </li>
          <li>
            <Link href="/entertainment/browse/trending" className="text-sm hover:underline">
              Trending
            </Link>
          </li>
          <li>
            <Link href="/entertainment/browse/award-winning" className="text-sm hover:underline">
              Award-Winning
            </Link>
          </li>
          <li>
            <Link href="/entertainment/browse/classics" className="text-sm hover:underline">
              Classics
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium leading-none">My Lists</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/entertainment/my-lists/watchlist" className="text-sm hover:underline">
              My Watchlist
            </Link>
          </li>
          <li>
            <Link href="/entertainment/my-lists/continue-watching" className="text-sm hover:underline">
              Continue Watching
            </Link>
          </li>
          <li>
            <Link href="/entertainment/my-lists/favorites" className="text-sm hover:underline">
              Favorites
            </Link>
          </li>
          <li>
            <Link href="/entertainment/my-lists/history" className="text-sm hover:underline">
              Watch History
            </Link>
          </li>
          <li>
            <Link href="/entertainment/my-lists/recommendations" className="text-sm hover:underline">
              Recommended for You
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
