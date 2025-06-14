import WholesaleProductDetailPage from "@/components/wholesale/wholesale-product-detail-page"

export const metadata = {
  title: "Product Details | Wholesale",
  description: "View detailed information about wholesale products",
}

export default function WholesaleProductDetailPageRoute({ params }: { params: { id: string } }) {
  return <WholesaleProductDetailPage productId={params.id} />
}
