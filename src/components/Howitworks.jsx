import { Shield, Wallet, Home } from "lucide-react";

export function Howitworks() {
  return (
    <section id="howitworks" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How RealMint Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A revolutionary approach to homeownership that combines traditional
            renting with blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Home,
              title: "Choose Your Property",
              description:
                "Browse our curated selection of rent-to-own properties. Each listing shows the monthly rent, ownership timeline, and total property value.",
            },
            {
              icon: Wallet,
              title: "Pay Rent, Earn Equity",
              description:
                "Every monthly payment automatically converts a portion into ownership tokens on the Hedera blockchain. Watch your equity grow with each payment.",
            },
            {
              icon: Shield,
              title: "Achieve Full Ownership",
              description:
                "Once you reach 100% ownership tokens, the property title transfers to you. All transactions are transparent and secured on the blockchain.",
            },
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-gradient-to-br from-green-900/30 to-black/50 backdrop-blur-sm border border-green-700/30 rounded-2xl p-8 hover:border-green-600/50 transition-all h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-8 -right-4 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm hidden md:flex">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
