import React, { useState } from 'react'
import { Star, ShoppingCart, Heart } from 'lucide-react'

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState('blue')
  const [selectedSize, setSelectedSize] = useState('M')

  const colors = [
    { name: 'Blue', class: 'bg-[#00398F]' },
    { name: 'Black', class: 'bg-[#272727]' },
    { name: 'Gray', class: 'bg-[#6F6A42]' },
  ]

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  return (
    <div className="min-h-screen bg-[#EFE8C2]">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img 
              src="/placeholder.svg?height=600&width=600&text=Women's+Denim+Jacket" 
              alt="Women's Denim Jacket" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4 text-[#224F34]">Women's Denim Jacket</h1>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#6F6A42] fill-current" />
                ))}
              </div>
              <span className="ml-2 text-[#272727]">(4.5/5 based on 24 reviews)</span>
            </div>
            <p className="text-2xl font-bold mb-4 text-[#224F34]">PKR 3,999</p>
            <p className="text-[#6F6A42] mb-4">Special Offer: 20% off</p>
            <p className="text-[#272727] mb-6">
              Classic denim jacket for women. Versatile and stylish, perfect for any casual outfit.
            </p>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 text-[#224F34]">Color</h2>
              <div className="flex space-x-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-8 h-8 rounded-full ${color.class} ${
                      selectedColor === color.name.toLowerCase() ? 'ring-2 ring-offset-2 ring-[#00398F]' : ''
                    }`}
                    onClick={() => setSelectedColor(color.name.toLowerCase())}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 text-[#224F34]">Size</h2>
              <div className="flex space-x-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedSize === size ? 'bg-[#00398F] text-white' : 'bg-[#EFE8C2] text-[#6F6A42]'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center px-6 py-2 bg-[#224F34] text-white rounded-lg hover:bg-[#1a3c2a]">
                <ShoppingCart className="mr-2" />
                Add to Cart
              </button>
              <button className="flex items-center px-6 py-2 bg-[#E63946] text-white rounded-lg hover:bg-[#C92A37]">
                <Heart className="mr-2" />
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}




