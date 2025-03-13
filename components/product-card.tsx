import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <Badge className="absolute top-2 right-2 bg-[#97225e]">{product.category}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
        <p className="text-[#97225e] font-bold text-xl">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-[#97225e] hover:bg-[#7a1c4c]">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

