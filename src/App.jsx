import React, { useState, useEffect } from "react";
import { testimonials } from "./testimonials";

export default function App() {
    const [index, setIndex] = useState(0)

    const nextSlide = ()=> {
        setIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = ()=> {
        setIndex((prev) => (prev-1 + testimonials.length) % testimonials.length)
    }

    useEffect(()=> {
        const timer = setInterval(()=> {
            nextSlide()
        },3000)
        return () => clearInterval(timer)
    }, [])
    const {name,title, quote,image} = testimonials[index]
 return (
  <div className="flex flex-col items-center judtify-center h-screen bg-gray-100 text-center p-4 ">
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-300 shadow-lg">
<img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h2 className="text-xl font-semi-bold text-purple-600 uppercase">{name}</h2>
    <p className="text-gray-800 mb-4">{title}</p>
    <p className="max-w-xl text-gray-600 mb-8 px-4">{quote}</p>
  </div>
 )
}
