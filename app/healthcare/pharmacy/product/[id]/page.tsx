import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import ProductDetailPage from "@/components/healthcare/product-detail-page"

export default function PharmacyProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      <ProductDetailPage productId={params.id} />
      <Footer />
    </div>
  )
}
