import Image from "next/image"
import Link from "next/link"
import { Star, ArrowRight } from "lucide-react"
import { products } from "@/lib/products"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-white min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-serif font-medium text-gray-900">
                Beauty is the new <br />
                <span className="text-[#97225e]">going out.</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-md">
                Discover our collection of premium makeup and accessories for your perfect look.
              </p>
              <Link
                href="#collection"
                className="inline-flex items-center px-6 py-3 bg-[#97225e] text-white rounded-full hover:bg-[#7a1c4c] transition-colors"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[600px]">
              <Image
                src="https://picsum.photos/seed/hero1/800/1000"
                alt="Featured products"
                fill
                className="object-cover rounded-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section id="collection" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif font-medium text-gray-900">Best Sellers</h2>
            <Link href="/products" className="text-[#97225e] hover:underline flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="group">
                <div className="bg-pink-50/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl">
                  <div className="relative aspect-square mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "text-[#97225e] fill-[#97225e]" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-[#97225e] font-semibold">{product.price} DH</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-medium text-center text-gray-900 mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-[#97225e] fill-[#97225e]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Amazing quality products! The makeup brushes are so soft and the accessories are beautiful. Will
                  definitely shop again!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 overflow-hidden relative">
                    <Image
                      src={`https://picsum.photos/seed/user${i}/200/200`}
                      alt="Customer"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-medium text-center text-gray-900 mb-12">Follow Us on Instagram</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/insta${i}/400/400`}
                  alt="Instagram post"
                  fill
                  className="object-cover hover:scale-110 transition-transform"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

