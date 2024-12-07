import React from 'react'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#EFE8C2]">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#272727]">About Us</h1>
        
        <div className="bg-[#EFE8C2] rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg mb-4 text-[#6F6A42]">
            Welcome to Logo – your ultimate destination for cool and trendy fashion! At Logo, we are 
            dedicated to providing the latest styles that resonate with the vibrant and dynamic spirit of 
            today's youth. Our collection is carefully curated to ensure that every piece embodies the 
            cutting-edge trends and timeless coolness that define your unique style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#EFE8C2] rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#272727]">Our Mission</h2>
            <p className="text-lg text-[#6F6A42]">
              Our mission is simple: to inspire and empower youngsters to express themselves through fashion. 
              Whether you're looking for the perfect outfit for a night out, a casual day at school, or anything 
              in between, Logo has you covered. We believe in fashion as a form of self-expression, and our diverse 
              range of clothing is designed to cater to every mood and moment.
            </p>
          </div>

          <div className="bg-[#EFE8C2] rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#272727]">Our Team</h2>
            <p className="text-lg text-[#6F6A42]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-[#EFE8C2] rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-[#272727]">Stay in the loop</h2>
          <p className="mb-4 text-[#6F6A42]">Subscribe to receive the latest news and updates about TDA. We promise not to spam you!</p>
          <form className="flex gap-4">
            <input 
              type="email" 
              placeholder="Enter email address" 
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00398F] bg-[#EFE8C2] text-[#6F6A42]"
            />
            <button type="submit" className="bg-[#00398F] text-white px-6 py-2 rounded-lg hover:bg-[#002D6F] transition duration-300">
              Continue
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}