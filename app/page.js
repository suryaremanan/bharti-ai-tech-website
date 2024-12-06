'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function App() {
  const useCases = [
    {
      title: 'Healthcare',
      description: 'Improve patient care and outcomes with predictive analytics and personalized treatment paths.',
      image: '/images/healthcare.jpg',
    },
    {
      title: 'Finance',
      description: 'Drive smarter financial decisions with fraud detection, credit scoring, and growth insights.',
      image: '/images/finance.jpg',
    },
    {
      title: 'Retail',
      description: 'Elevate shopping experiences with tailored recommendations, demand forecasting, and inventory mastery.',
      image: '/images/retail.jpg',
    },
    {
      title: 'Manufacturing',
      description: 'Optimize production lines and reduce downtime with predictive maintenance and intelligent resource allocation.',
      image: '/images/manufacturing.jpg',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Automatically cycle through use cases every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % useCases.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [useCases.length])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8 bg-white shadow-sm">
        <div className="text-2xl font-bold tracking-tight text-indigo-700 flex items-center space-x-2">
          <span>Bharti AI Tech</span>
        </div>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#services" className="hover:text-indigo-600 transition">Services</a>
          <a href="#use-cases" className="hover:text-indigo-600 transition">Use Cases</a>
          <Link href="/mindsparksAI" className="hover:text-indigo-600 transition">MindSparksAI</Link>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-8 overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="relative z-10 max-w-2xl mx-auto text-white">
          <h1 className="text-5xl font-extrabold drop-shadow-md">
            Empower Your World with AI
          </h1>
          <p className="mt-4 text-lg">
            Transform data into insights. Innovate faster. Elevate experiences globally. With Bharti AI Tech, the future is in your hands.
          </p>
          <a 
            href="#contact" 
            className="inline-block mt-8 bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-20 mix-blend-multiply"></div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Our Services
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          From strategic consulting to custom AI solutions, we partner with you to unlock possibilities and ensure sustained growth.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="p-6 border rounded-lg hover:shadow-xl transition flex flex-col items-start">
            <h3 className="font-bold mb-2 text-indigo-700">AI Strategy & Roadmapping</h3>
            <p className="text-sm text-gray-600">Define your AI journey with expert guidance and actionable plans.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-xl transition flex flex-col items-start">
            <h3 className="font-bold mb-2 text-indigo-700">Custom Model Development</h3>
            <p className="text-sm text-gray-600">Tailor-made AI models to solve your unique challenges.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-xl transition flex flex-col items-start">
            <h3 className="font-bold mb-2 text-indigo-700">Data Engineering & Prep</h3>
            <p className="text-sm text-gray-600">Ensure high-quality data pipelines and reliable data sources.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-xl transition flex flex-col items-start">
            <h3 className="font-bold mb-2 text-indigo-700">Integration & Deployment</h3>
            <p className="text-sm text-gray-600">Seamless integration into your existing systems for maximum ROI.</p>
          </div>
        </div>
      </section>

      {/* Use Cases (Auto-Rotating Slideshow) */}
      <section id="use-cases" className="py-16 bg-gradient-to-r from-white to-indigo-50 w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Real-World AI in Action</h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Explore how our AI solutions reshape industries—improving outcomes, streamlining operations, and inspiring innovation worldwide.
          </p>
        </div>
        {/* Full width carousel with centered text overlay */}
        <div className="relative w-full h-[500px] overflow-hidden">
          <Image
            src={useCases[currentIndex].image}
            alt={useCases[currentIndex].title}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-4 text-center">
            <h3 className="font-bold text-3xl mb-2 drop-shadow-md">{useCases[currentIndex].title}</h3>
            <p className="text-sm max-w-md leading-relaxed">{useCases[currentIndex].description}</p>
          </div>
        </div>
      </section>

      {/* MindSparksAI Highlight */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Introducing MindSparksAI
        </h2>
        <p className="text-center max-w-xl mx-auto text-gray-600 mb-12">
          Revolutionize learning environments with real-time AI insights. Keep students engaged, improve outcomes, and empower educators everywhere.
        </p>
        <div className="md:flex md:space-x-8 items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image 
              src="/images/mindsparks-classroom.jpg" 
              alt="Classroom engagement illustration" 
              width={600} 
              height={400} 
              className="rounded shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              MindSparksAI harnesses video-based emotion and pose recognition to gauge student engagement in real-time. Detect boredom, spot active participation, and get instant recommendations to re-energize classrooms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Automatic attendance tracking, personalized reports, and actionable insights enable educators to adapt strategies on the fly, ensuring every student thrives.
            </p>
            <button
              onClick={() => alert('More details coming soon!')}
              className="inline-block mt-4 bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition font-semibold"
            >
              Learn More & Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-8 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-8">
          Ready to embrace AI-driven transformation? Let’s talk.
        </p>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-indigo-500"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-indigo-500"
          />
          <textarea 
            placeholder="Message" 
            className="w-full border border-gray-300 p-3 rounded h-32 focus:outline-none focus:border-indigo-500"
          ></textarea>
          <button 
            type="submit" 
            className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-indigo-700 transition w-full"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 px-8 text-center text-sm text-gray-500 mt-auto border-t">
        © {new Date().getFullYear()} Bharti AI Tech. All rights reserved.
        <div className="mt-2 text-gray-400">Headquartered in India, Serving Clients Worldwide.</div>
      </footer>
    </div>
  )
}
