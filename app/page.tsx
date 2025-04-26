import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react"
import NALDALogo from '@/public/nalda-logo.png'
import Hero from "@/public/hero.png"
import Grass from "@/public/nalda-grass.png"
import CEO from "@/public/CEO.png"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top green bar */}
      <div className="bg-green-700 text-white py-2 px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center text-sm">
          <MapPin className="h-4 w-4 mr-2" />
          <span>No 2a Usman Danfodio Crescent, Aso Villa, FCTA</span>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-0">
          <div className="flex items-center text-sm mr-4">
            <span>info@nalda.gov.ng</span>
          </div>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Logo and Authority name */}
      <div className="py-4 px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <Image src={NALDALogo} alt="NALDA Logo" width={240} height={240} className="mr-2" />
          {/* <span className="text-2xl font-bold">NALDA</span> */}
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          {/* <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Nigerian Government Logo"
            width={40}
            height={40}
            className="mr-2"
          /> */}
          <div className="flex flex-col">
            <span className="font-semibold text-lg">Nigerian Government</span>
            <span className="text-gray-600 text-sm">National Agricultural Land Development Authority</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center flex-wrap">
        <nav className="flex flex-wrap justify-center items-center text-white">
          <Link href="#" className="bg-green-700 py-4 px-6 hover:bg-green-800 transition-colors">
            Home
          </Link>
          <Link href="#" className="bg-green-700 py-4 px-6 hover:bg-green-800 transition-colors">
            Projects
          </Link>
          <Link href="#" className="bg-green-700 py-4 px-6 hover:bg-green-800 transition-colors">
            Programmes
          </Link>
          <Link href="#" className="bg-green-700 py-4 px-6 hover:bg-green-800 transition-colors flex items-center">
            Resources <ChevronDown className="h-4 w-4 ml-1" />
          </Link>
          <Link href="#" className="bg-green-700 py-4 px-6 hover:bg-green-800 transition-colors">
            News
          </Link>
          <Link href="#" className="bg-green-700 py-4 px-6 hover:bg-green-800 transition-colors">
            About Us
          </Link>
          <Link href="#" className="bg-green-700 py-4 px-6 hover:bg-green-800 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="bg-gray-900 text-white py-4 px-6 flex items-center">
          <Phone className="h-4 w-4 mr-2" />
          <span>0703 326 4358</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Background image */}
        <Image
          src={Hero}
          alt="Aerial Spraying Equipment"
          fill
          className="object-cover"
        />

        {/* Navigation arrows */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50 p-4 z-20">
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50 p-4 z-20">
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Hero content */}
        <div className="absolute  bottom-15 left-150 z-20 text-white  max-w-2xl">
          {/* <h1 className="text-5xl font-bold mb-4">
            <span className="text-green-400">Modernizing NALDA Farms:</span> Introducing Air Spraying Equipment"
          </h1>
          <p className="text-xl mb-8">Elevating Agriculture: Introducing Aerial Spraying Innovation to NALDA Farms</p> */}
          
          <button className="border flex items-center justify-center border-white px-8 py-4 hover:bg-transparent hover:text-white cursor-pointer transition-colors">
            Read more
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Food & Fibre Security */}
            <div className="bg-white p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-16 h-16 text-green-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 14C8.7 14 6 11.3 6 8V7.7C6 4.3 8.7 1.6 12.1 1.6C15.5 1.6 18.2 4.3 18.2 7.7V8C18 11.3 15.3 14 12 14Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14V22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 18H9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Food & Fibre Security</h3>
              <p className="text-gray-600 mb-6">
                At NALDA, our mission is to achieve Food and Fiber Security for our nation through diverse initiatives
                that empower the younger generation in agriculture.
              </p>
              <button className="bg-green-700 text-white px-6 py-2 hover:bg-green-800 transition-colors">
                Learn More
              </button>
            </div>

            {/* Land Survey & Allocation */}
            <div className="bg-white p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-16 h-16 text-green-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Land Survey & Allocation</h3>
              <p className="text-gray-600 mb-6">
                Our mission: Unlock Nigeria's land potential through Integrated Farm Estates, elevating agricultural
                output, supporting farmers, investors, and food security.
              </p>
              <button className="bg-green-700 text-white px-6 py-2 hover:bg-green-800 transition-colors">
                Learn More
              </button>
            </div>

            {/* Youth & Women Empowerment */}
            <div className="bg-white p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-16 h-16 text-green-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 13.5L3 22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5 13.5L21 22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Youth & Women Empowerment</h3>
              <p className="text-gray-600 mb-6">
                We believe in youth potential and use the "catch them young" approach. Our seminars and workshops impart
                innovative farming techniques.
              </p>
              <button className="bg-green-700 text-white px-6 py-2 hover:bg-green-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Grass border */}
        <div className="mt-16 w-full">
          <Image src={Grass} alt="NALDA Grass"/>
        </div>
      </div>

      {/* Welcome to NALDA Section */}
      <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Welcome to NALDA</h2>
              <p className="text-gray-700 leading-relaxed">
                NALDA, led by the Executive Secretary/CEO, strives to tap into Nigeria's land potential through a
                variety of initiatives. Their primary focus is on the development of rural areas, where they establish
                Integrated Farm Estates to significantly boost agricultural production. This strategy provides
                substantial support to farmers and investors while bolstering national food security. NALDA strongly
                believes in the potential of young people and recognizes the importance of involving them in agriculture
                from an early age. They employ the "catch them young" approach by conducting seminars and workshops to
                introduce innovative farming techniques, empowering the younger generation in the agricultural field.
                Furthermore, NALDA is dedicated to ensuring food and fiber security for the nation. By dedicating
                efforts to empower both youth and women, the organization promotes gender inclusivity and actively
                encourages sustainable agricultural practices.
              </p>
            </div>
            <div className="relative">
              <div className="relative">
                <Image
                  src={CEO}
                  alt="Executive Secretary/CEO"
                  width={400}
                  height={400}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
