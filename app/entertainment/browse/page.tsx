import ContentListingPage from "@/components/entertainment/content-listing-page"

export const metadata = {
  title: "Browse Content | Entertainment & Streaming",
  description: "Browse movies, TV shows, and more on our entertainment platform",
}

export default function BrowsePage({
  searchParams,
}: {
  searchParams: {
    genre?: string
    category?: string
    sort?: string
  }
}) {
  return <ContentListingPage searchParams={searchParams} />
}
