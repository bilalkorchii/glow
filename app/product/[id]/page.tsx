"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Heart, Share2 } from "lucide-react"
import { WhatsappIcon } from "@/components/whatsapp-icon"
import { products } from "@/lib/products"

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  const productImages = [
    product?.image,
    `https://picsum.photos/seed/product${productId}a/800/800`,
    `https://picsum.photos/seed/product${productId}b/800/800`,
    `https://picsum.photos/seed/product${productId}c/800/800`,
  ]

  const handleWhatsAppBuy = () => {
    if (!product) return
    const message = encodeURIComponent(`Hello! I want to buy ${product.name} for ${product.price} DH.`)
    window.open(`https://wa.me/212772264913?text=${message}`, "_blank")
  }
  

  if (!product) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <p>Product not found</p>
        <Link href="/" className="inline-flex items-center text-[#97225e] hover:underline mt-4">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b from-pink-50/50 to-white min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-[#97225e] mb-8">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-pink-50">
              <Image
                src={productImages[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden ${
                    selectedImage === index ? "ring-2 ring-[#97225e]" : ""
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-serif font-medium text-gray-900">{product.name}</h1>
              <p className="text-2xl font-semibold text-[#97225e]">{product.price} DH</p>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? "text-[#97225e] fill-[#97225e]" : "text-gray-300"}`} />
                  ))}
                </div>
                <span className="text-gray-500">(24 reviews)</span>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleWhatsAppBuy}
                className="flex-1 bg-[#97225e] hover:bg-[#7a1c4c] text-white py-3 px-6 rounded-full flex items-center justify-center"
              >
                <WhatsappIcon className="w-5 h-5 mr-2" />
                Buy on WhatsApp
              </button>
              <button className="p-3 rounded-full border border-gray-200 hover:border-[#97225e] text-gray-600 hover:text-[#97225e]">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-full border border-gray-200 hover:border-[#97225e] text-gray-600 hover:text-[#97225e]">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#97225e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Premium Quality</p>
                  <p className="text-sm text-gray-500">Handpicked products</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#97225e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Fast Delivery</p>
                  <p className="text-sm text-gray-500">Quick response on WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

