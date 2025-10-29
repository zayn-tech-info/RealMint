"use client";

import {
  Home,
  Wallet,
  TrendingUp,
  Shield,
  CheckCircle2,
  ArrowRight,
  Users,
  Clock,
  DollarSign,
} from "lucide-react";

import { Link } from "react-router-dom";

export function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            How RealMint Works
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Understanding the revolutionary process that transforms your rent
            payments into real homeownership through blockchain technology
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-700/50 rounded-full mb-6">
                  <span className="text-green-400 font-bold">Step 1</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Browse & Select Your Property
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Explore our curated marketplace of rent-to-own properties
                  across the United States. Each listing provides complete
                  transparency with detailed information about monthly payments,
                  ownership timelines, property values, and neighborhood
                  insights.
                </p>
                <ul className="space-y-3">
                  {[
                    "View high-quality photos and virtual tours",
                    "Review detailed property specifications",
                    "Calculate your ownership timeline",
                    "Schedule in-person or virtual viewings",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-green-900/30 to-black/50 backdrop-blur-sm border border-green-700/40 rounded-2xl p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Home className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-green-400 mb-2">
                      1,200+
                    </div>
                    <div className="text-gray-400">Properties Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-700/50 rounded-full mb-6">
                  <span className="text-green-400 font-bold">Step 2</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Complete Your Application
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our streamlined application process is designed to be simple
                  and transparent. We evaluate your financial situation fairly
                  and provide clear feedback throughout the approval process. No
                  hidden requirements or surprise rejections.
                </p>
                <ul className="space-y-3">
                  {[
                    "Submit basic personal and financial information",
                    "Quick credit and income verification",
                    "Flexible approval criteria for various situations",
                    "Receive decision within 24-48 hours",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="bg-gradient-to-br from-green-900/30 to-black/50 backdrop-blur-sm border border-green-700/40 rounded-2xl p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl">
                      <span className="text-gray-400">Application Status</span>
                      <span className="text-green-400 font-semibold">
                        Approved
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl">
                      <span className="text-gray-400">Credit Check</span>
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl">
                      <span className="text-gray-400">Income Verification</span>
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-700/50 rounded-full mb-6">
                  <span className="text-green-400 font-bold">Step 3</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Start Paying Rent & Building Equity
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Once approved, you move in and begin making monthly payments.
                  Here's where RealMint revolutionizes the process: every
                  payment is automatically split between rent and ownership
                  tokens on the Hedera blockchain. You're not just paying
                  rent—you're investing in your future.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automatic payment processing each month",
                    "Instant ownership token minting on blockchain",
                    "Real-time equity tracking in your dashboard",
                    "Transparent breakdown of rent vs. equity",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-green-900/30 to-black/50 backdrop-blur-sm border border-green-700/40 rounded-2xl p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Wallet className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-4">
                    <div className="text-center mb-4">
                      <div className="text-sm text-gray-400 mb-2">
                        Monthly Payment Breakdown
                      </div>
                      <div className="text-4xl font-bold text-green-400">
                        $1,850
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-xl">
                      <span className="text-gray-400 text-sm">
                        Rent Portion
                      </span>
                      <span className="text-white font-semibold">$1,330</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-900/30 rounded-xl border border-green-700/30">
                      <span className="text-gray-400 text-sm">
                        Equity Portion
                      </span>
                      <span className="text-green-400 font-semibold">$520</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-700/50 rounded-full mb-6">
                  <span className="text-green-400 font-bold">Step 4</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Achieve Full Ownership
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Once you reach 100% ownership tokens (typically 7-10 years
                  depending on your payment plan), the property title
                  automatically transfers to you. The entire process is secured
                  and verified on the Hedera blockchain, providing immutable
                  proof of your ownership journey.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automatic title transfer at 100% ownership",
                    "Blockchain-verified ownership history",
                    "No additional closing costs or fees",
                    "Full property rights and equity access",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="bg-gradient-to-br from-green-900/30 to-black/50 backdrop-blur-sm border border-green-700/40 rounded-2xl p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-400">Ownership Progress</span>
                      <span className="text-3xl font-bold text-green-400">
                        100%
                      </span>
                    </div>
                    <div className="relative h-6 bg-black/50 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 rounded-full" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        120
                      </div>
                      <div className="text-xs text-gray-400">Payments Made</div>
                    </div>
                    <div className="bg-black/30 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        $425K
                      </div>
                      <div className="text-xs text-gray-400">Total Equity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Blockchain */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-900/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Blockchain Technology?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Traditional rent-to-own programs lack transparency and trust.
              Blockchain solves these problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Immutable Records",
                description:
                  "Every payment and ownership token is permanently recorded on the Hedera blockchain. No disputes, no lost records, complete transparency.",
              },
              {
                icon: Clock,
                title: "Real-Time Tracking",
                description:
                  "Watch your ownership percentage grow with each payment. Access your complete payment history and equity calculations anytime, anywhere.",
              },
              {
                icon: DollarSign,
                title: "True Ownership",
                description:
                  "Your ownership tokens are yours from day one. Transfer them, use them as collateral, or hold them until full ownership—you have complete control.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-green-900/30 to-black/50 backdrop-blur-sm border border-green-700/40 rounded-2xl p-8 hover:border-green-600/50 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
                Browse available properties and take the first step toward
                homeownership today.
              </p>
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105"
              >
                Explore Properties
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
