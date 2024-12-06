'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'


export default function Home() {
  const useCases = [
    {
      title: 'Healthcare',
      description: 'Elevate patient care with predictive analytics—spotting trends, personalizing treatment, and ensuring better health outcomes.',
      image: '/images/healthcare.jpg'
    },
    {
      title: 'Finance',
      description: 'Empower decisions with fraud detection, automated credit scoring, and investment insights that drive smarter growth.',
      image: '/images/finance.jpg'
    },
    {
      title: 'Retail',
      description: 'Reinvent shopping experiences through tailored recommendations, razor-sharp demand forecasts, and inventory mastery.',
      image: '/images/retail.jpg'
    },
    {
      title: 'Manufacturing',
      description: 'Supercharge efficiency with predictive maintenance and optimized production lines, slashing downtime and costs.',
      image: '/images/manufacturing.jpg'
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % useCases.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? useCases.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8 border-b">
        <div className="text-xl font-bold flex items-center space-x-2">
          <span>Bharti AI Tech</span>
        </div>
        <nav className="space-x-4">
          <a href="#services" className="hover:text-indigo-600">Services</a>
          <a href="#use-cases" className="hover:text-indigo-600">Use Cases</a>
          <Link href="/mindsparksAI" className="hover:text-indigo-600">MindSparksAI</Link>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-20 px-8 bg-indigo-50">
        <h1 className="text-4xl font-bold text-gray-800">
          Empowering Global Enterprises with AI Solutions
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl">
          From idea to implementation, we help you leverage AI for real-world impact, blending Indian innovation with global expertise.
        </p>
        <a 
          href="#contact" 
          className="inline-block mt-8 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
        >
          Schedule a Consultation
        </a>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="p-6 border rounded hover:shadow-lg transition">
            <h3 className="font-bold mb-2">AI Strategy & Roadmapping</h3>
            <p className="text-sm text-gray-600">Define your AI journey with expert guidance and actionable plans.</p>
          </div>
          <div className="p-6 border rounded hover:shadow-lg transition">
            <h3 className="font-bold mb-2">Custom Model Development</h3>
            <p className="text-sm text-gray-600">Tailor-made AI models to solve your unique challenges.</p>
          </div>
          <div className="p-6 border rounded hover:shadow-lg transition">
            <h3 className="font-bold mb-2">Data Engineering & Prep</h3>
            <p className="text-sm text-gray-600">Ensure high-quality data pipelines and reliable data sources.</p>
          </div>
          <div className="p-6 border rounded hover:shadow-lg transition">
            <h3 className="font-bold mb-2">Integration & Deployment</h3>
            <p className="text-sm text-gray-600">Seamless integration into your existing systems for maximum ROI.</p>
          </div>
        </div>
      </section>

      {/* Use Cases Carousel */}
      <section id="use-cases" className="py-16 px-8 bg-gradient-to-r from-indigo-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">Real-World AI in Action</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Witness the unstoppable potential of AI as it revolutionizes industries.  
            Explore how cutting-edge solutions reshape customer experiences, drive efficiency, and unlock new opportunities.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative flex flex-col items-center">
          <div className="relative w-full sm:w-3/4 md:w-1/2">
            <div 
              key={useCases[currentIndex].title} 
              className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 ease-in-out"
            >
              <div className="relative w-full h-full">
                <Image 
                  src={useCases[currentIndex].image}
                  alt={useCases[currentIndex].title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-6 text-white">
                  <h3 className="font-bold text-2xl mb-2 drop-shadow-md">{useCases[currentIndex].title}</h3>
                  <p className="text-sm max-w-xs">{useCases[currentIndex].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex space-x-4 mt-6">
            <button 
              onClick={handlePrev} 
              className="flex items-center space-x-2 bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition focus:outline-none"
            >
              <ChevronLeftIcon className="h-5 w-5" />
              <span>Previous</span>
            </button>
            <button 
              onClick={handleNext} 
              className="flex items-center space-x-2 bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition focus:outline-none"
            >
              <span>Next</span>
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* MindSparksAI Highlight */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Introducing MindSparksAI
        </h2>
        <div className="md:flex md:space-x-8 items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image 
              src="/images/mindsparks-classroom.jpg" 
              alt="Classroom engagement illustration" 
              width={600} 
              height={400} 
              className="rounded shadow-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-700">
              <strong>MindSparksAI</strong> is a groundbreaking classroom engagement system that harnesses real-time AI-driven insights. It detects emotions like boredom and attentiveness, performs pose estimation, and tracks behaviors such as phone usage and daydreaming.
            </p>
            <p className="text-gray-700">
              With these insights, teachers can instantly see who’s losing focus and adjust their teaching strategies to re-engage learners. MindSparksAI also supports automatic attendance via liveness detection, and provides personalized reports and recommendations to help every student excel.
            </p>
            <button
              onClick={() => alert('More details coming soon!')}
              className="inline-block mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
            >
              Learn More & Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-8 max-w-lg mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Get in Touch</h2>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full border p-2 rounded"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full border p-2 rounded"
          />
          <textarea 
            placeholder="Message" 
            className="w-full border p-2 rounded h-32"
          ></textarea>
          <button 
            type="submit" 
            className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition w-full"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-4 px-8 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Bharti AI Tech. All rights reserved. | Headquartered in India, Serving Clients Worldwide.
      </footer>
    </div>
  )
}
