import {
  ArrowRight,
  Building2Icon,
  Clock,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-700/50 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-300 text-sm font-medium">
              Powered by Hedera Blockchain
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Turn Your Rent Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Ownership
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Stop throwing money away on rent. With RealMint, every payment
            builds equity through blockchain-verified ownership tokens. Your
            path to homeownership starts today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/properties"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Browse Properties
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold text-lg transition-all border border-white/20 w-full sm:w-auto justify-center flex items-center"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            {
              label: "Properties Available",
              value: "1,200+",
              icon: Building2Icon,
            },
            { label: "Active Renters", value: "5,400+", icon: Users },
            { label: "Avg. Time to Ownership", value: "7 Years", icon: Clock },
            { label: "Total Equity Built", value: "$42M+", icon: TrendingUp },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-green-900/20 to-black/40 backdrop-blur-sm border border-green-700/30 rounded-xl p-6 hover:border-green-600/50 transition-all"
            >
              <stat.icon className="w-8 h-8 text-green-400 mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
