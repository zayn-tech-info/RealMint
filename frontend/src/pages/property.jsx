import Property1 from "../assets/property_1.jpg";
import Property2 from "../assets/property_2.jpg";
import Property3 from "../assets/property_3.jpg";
import Property4 from "../assets/property_4.jpg";

import {
  Home,
  MapPin,
  Calendar,
  ArrowRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const properties = [
  {
    id: 1,
    image: Property1,
    title: "Modern Family Home",
    location: "Austin, TX",
    price: 1850,
    totalValue: 425000,
    ownership: 0,
    timeline: "8 years",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
  },
  {
    id: 2,
    image: Property2,
    title: "Downtown Luxury Condo",
    location: "Miami, FL",
    price: 2200,
    totalValue: 380000,
    ownership: 0,
    timeline: "7 years",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1600,
  },
  {
    id: 3,
    image: Property3,
    title: "Cozy Cottage Retreat",
    location: "Portland, OR",
    price: 1650,
    totalValue: 395000,
    ownership: 0,
    timeline: "9 years",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
  },
  {
    id: 4,
    image: Property4,
    title: "Beachfront Paradise",
    location: "San Diego, CA",
    price: 2800,
    totalValue: 650000,
    ownership: 0,
    timeline: "10 years",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2200,
  },
  {
    id: 5,
    image: Property1,
    title: "Urban Loft Space",
    location: "Chicago, IL",
    price: 1950,
    totalValue: 340000,
    ownership: 0,
    timeline: "7 years",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
  },
  {
    id: 6,
    image: Property3,
    title: "Mountain View Estate",
    location: "Denver, CO",
    price: 2400,
    totalValue: 520000,
    ownership: 0,
    timeline: "9 years",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
  },
];

export function Property() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
              Find Your Future Home
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Browse our curated selection of rent-to-own properties. Start
              building equity from day one.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by location, property type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-green-700/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-600/50 transition-colors"
                />
              </div>
              <button className="px-6 py-4 bg-white/10 border border-green-700/30 rounded-xl text-white hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Link
                key={property.id}
                to={`/propertydetails/${property.id}`}
                className="group"
              >
                <div className="bg-gradient-to-br from-green-900/20 to-black/40 backdrop-blur-sm border border-green-700/30 rounded-2xl overflow-hidden hover:border-green-600/50 transition-all hover:scale-[1.02]">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-green-600 rounded-full text-white text-sm font-semibold">
                      Available
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                        {property.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-green-700/30">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Beds</div>
                        <div className="text-white font-semibold">
                          {property.bedrooms}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Baths</div>
                        <div className="text-white font-semibold">
                          {property.bathrooms}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Sq Ft</div>
                        <div className="text-white font-semibold">
                          {property.sqft.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">
                          Monthly Payment
                        </span>
                        <span className="text-2xl font-bold text-green-400">
                          ${property.price.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Total Value</span>
                        <span className="text-white font-semibold">
                          ${property.totalValue.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>Own in {property.timeline}</span>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between text-green-400 font-semibold group-hover:gap-2 transition-all">
                      <span>View Details</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// import {
//   Home,
//   MapPin,
//   TrendingUp,
//   ArrowRight,
//   Bed,
//   Bath,
//   Maximize,
//   Shield,
//   Wallet,
//   CheckCircle2,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Property1 from "../assets/property_1.jpg";
// import Property2 from "../assets/property_2.jpg";
// import Property3 from "../assets/property_3.jpg";
// import Property4 from "../assets/property_4.jpg";

// export function Property() {
//   const [monthlyPayment, setMonthlyPayment] = useState(1850);
//   const totalValue = 425000;
//   const ownershipPercentage = (monthlyPayment / totalValue) * 100 * 120;

//   return (
//     <div className="min-h-screen">
//       <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-4 mb-8">
//             <div className="relative h-[500px] rounded-2xl overflow-hidden">
//               <img
//                 src={Property1}
//                 alt="Property main view"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="relative h-60 rounded-2xl overflow-hidden">
//                 <img
//                   src={Property2}
//                   alt="Kitchen"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="relative h-60 rounded-2xl overflow-hidden">
//                 <img
//                   src={Property3}
//                   alt="Living room"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="relative h-60 rounded-2xl overflow-hidden">
//                 <img
//                   src={Property4}
//                   alt="Bedroom"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="relative h-60 rounded-2xl overflow-hidden">
//                 <img
//                   src={Property4}
//                   alt="Bathroom"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Property Details */}
//       <section className="pb-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Main Content */}
//             <div className="lg:col-span-2 space-y-8">
//               <div>
//                 <div className="flex items-start justify-between mb-4">
//                   <div>
//                     <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
//                       Modern Family Home
//                     </h1>
//                     <div className="flex items-center gap-2 text-gray-400">
//                       <MapPin className="w-5 h-5" />
//                       <span className="text-lg">Austin, TX 78701</span>
//                     </div>
//                   </div>
//                   <div className="px-4 py-2 bg-green-600 rounded-full text-white font-semibold">
//                     Available
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-6 py-6 border-y border-green-700/30">
//                   <div className="flex items-center gap-2">
//                     <Bed className="w-5 h-5 text-green-400" />
//                     <span className="text-white font-semibold">4 Beds</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Bath className="w-5 h-5 text-green-400" />
//                     <span className="text-white font-semibold">3 Baths</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Maximize className="w-5 h-5 text-green-400" />
//                     <span className="text-white font-semibold">
//                       2,400 sq ft
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-br from-green-900/20 to-black/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-8">
//                 <h2 className="text-2xl font-bold text-white mb-4">
//                   About This Property
//                 </h2>
//                 <p className="text-gray-300 leading-relaxed mb-4">
//                   Welcome to this stunning modern family home located in the
//                   heart of Austin, Texas. This beautifully designed 4-bedroom,
//                   3-bathroom residence offers the perfect blend of contemporary
//                   style and comfortable living spaces.
//                 </p>
//                 <p className="text-gray-300 leading-relaxed mb-4">
//                   The open-concept floor plan features a gourmet kitchen with
//                   stainless steel appliances, granite countertops, and a
//                   spacious island perfect for entertaining. The master suite
//                   includes a luxurious en-suite bathroom and walk-in closet.
//                 </p>
//                 <p className="text-gray-300 leading-relaxed">
//                   Located in a family-friendly neighborhood with excellent
//                   schools, parks, and shopping nearby. This property is perfect
//                   for families looking to build equity while enjoying a high
//                   quality of life in one of America's fastest-growing cities.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-green-900/20 to-black/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-8">
//                 <h2 className="text-2xl font-bold text-white mb-6">
//                   Key Features
//                 </h2>
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   {[
//                     "Modern open-concept design",
//                     "Gourmet kitchen with island",
//                     "Master suite with walk-in closet",
//                     "Energy-efficient appliances",
//                     "Two-car garage",
//                     "Landscaped backyard",
//                     "Smart home technology",
//                     "Near top-rated schools",
//                   ].map((feature, i) => (
//                     <div key={i} className="flex items-center gap-3">
//                       <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
//                       <span className="text-gray-300">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Sidebar */}
//             <div className="space-y-6">
//               <div className="bg-gradient-to-br from-green-900/30 to-black/50 backdrop-blur-sm border border-green-700/40 rounded-2xl p-8 sticky top-24">
//                 <div className="mb-6">
//                   <div className="text-sm text-gray-400 mb-2">
//                     Monthly Payment
//                   </div>
//                   <div className="text-4xl font-bold text-green-400 mb-1">
//                     ${monthlyPayment.toLocaleString()}
//                   </div>
//                   <div className="text-sm text-gray-400">
//                     Total Value: ${totalValue.toLocaleString()}
//                   </div>
//                 </div>

//                 <div className="space-y-4 mb-6 pb-6 border-b border-green-700/30">
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-400">Ownership Timeline</span>
//                     <span className="text-white font-semibold">8 years</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-400">Monthly Equity</span>
//                     <span className="text-green-400 font-semibold">$520</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-400">Total Payments</span>
//                     <span className="text-white font-semibold">96</span>
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <h3 className="text-white font-semibold mb-4">
//                     Ownership Calculator
//                   </h3>
//                   <div className="space-y-4">
//                     <div>
//                       <label className="text-sm text-gray-400 mb-2 block">
//                         Adjust Monthly Payment
//                       </label>
//                       <input
//                         type="range"
//                         min="1500"
//                         max="2500"
//                         value={monthlyPayment}
//                         onChange={(e) =>
//                           setMonthlyPayment(Number(e.target.value))
//                         }
//                         className="w-full accent-green-600"
//                       />
//                     </div>
//                     <div className="bg-black/30 rounded-xl p-4">
//                       <div className="text-sm text-gray-400 mb-2">
//                         Estimated Ownership
//                       </div>
//                       <div className="text-2xl font-bold text-green-400">
//                         {ownershipPercentage.toFixed(1)}%
//                       </div>
//                       <div className="text-xs text-gray-400 mt-1">
//                         After 8 years
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <button className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 mb-3">
//                   Start Application
//                   <ArrowRight className="w-5 h-5" />
//                 </button>

//                 <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all border border-white/20">
//                   Schedule Viewing
//                 </button>

//                 <div className="mt-6 pt-6 border-t border-green-700/30 space-y-3">
//                   <div className="flex items-center gap-3 text-sm text-gray-300">
//                     <Shield className="w-5 h-5 text-green-400" />
//                     <span>Blockchain-verified ownership</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-sm text-gray-300">
//                     <Wallet className="w-5 h-5 text-green-400" />
//                     <span>Transparent payment tracking</span>
//                   </div>
//                   <div className="flex items-center gap-3 text-sm text-gray-300">
//                     <TrendingUp className="w-5 h-5 text-green-400" />
//                     <span>Build equity from day one</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-green-900/20 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
//           <p>
//             &copy; 2025 OwnChain. All rights reserved. Powered by Hedera
//             Blockchain.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }
