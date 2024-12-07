import React from 'react'
import { Star, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const bestSellers = [
    { name: 'Summer Wind T-shirt', price: 31.99, rating: 4.2, image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' },
    { name: 'Tailored Jacket', price: 41.03, rating: 5.0, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80' },
    { name: 'Solid White Summer T-shirt', price: 29.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80' },
    { name: 'Formal Classic Suit', price: 50.00, rating: 4.0, image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' },
    { name: 'Classic Top', price: 24.54, rating: 3.8, image: 'https://images.unsplash.com/photo-1604695573706-53170668f6a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' },
    { name: 'White Solid Formal T-shirt', price: 42.09, rating: 5.0, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80' },
    { name: 'Formal Jeans', price: 38.99, rating: 5.0, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80' },
    { name: 'Classic Tailored Jacket', price: 38.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1611485988300-b7530defb8e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' },
  ]

  const testimonials = [
    { name: 'Beenish Mumtaz', text: 'I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!' },
    { name: 'Maria Shabbir', text: 'The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit perfectly. I\'m beyond satisfied!' },
    { name: 'Ayra Khan', text: 'I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!' },
  ]

  return (
    <div className="min-h-screen bg-[#EFE8C2]">
      <main>
        <section className="bg-[#EFE8C2] py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">Uncover and cultivate your distinctive style</h1>
                <p className="text-[#6F6A42] mb-6">Lorem ipsum dolor sit amet consectetur. Faucibus odio gravida amet tellus adipiscing donec adipiscing dignissim.</p>
                <button className="bg-[#00398F] text-white px-6 py-3 rounded-full font-semibold">Explore Now</button>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Fashion" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EFE8C2] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Best Selling</h2>
            <p className="text-center text-[#6F6A42] mb-12">Cool & Trendy Clothes For You</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {bestSellers.map((product, index) => (
                <div key={index} className="bg-[#EFE8C2] rounded-lg shadow-md overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-[#00398F] font-bold">${product.price.toFixed(2)}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-[#6F6A42] fill-current" />
                        <span className="ml-1 text-sm text-[#6F6A42]">{product.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="bg-[#00398F] text-white px-6 py-3 rounded-full font-semibold inline-flex items-center">
                See more
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#EFE8C2] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-[#6F6A42] mb-4">{testimonial.text}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
      </main>

    </div>
  )
}