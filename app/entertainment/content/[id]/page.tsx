import ContentDetailPage from "@/components/entertainment/content-detail-page"

export const metadata = {
  title: "Content Details | Entertainment & Streaming",
  description: "Watch movies, TV shows, and more on our entertainment platform",
}

export default function ContentPage({ params }: { params: { id: string } }) {
  return <ContentDetailPage id={params.id} />
}
