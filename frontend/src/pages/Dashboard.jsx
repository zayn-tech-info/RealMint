import {
  Home,
  TrendingUp,
  Calendar,
  DollarSign,
  Award,
  ArrowRight,
  Download,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import Property4 from "../assets/property_4.jpg";

export function Dashboard() {
  const ownershipPercentage = 34.5;
  const paymentsMade = 42;
  const totalPayments = 120;
  const equityBuilt = 86250;
  const nextPayment = "2025-02-01";
  const monthlyAmount = 1850;

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                Your Dashboard
              </h1>
              <p className="text-gray-400">
                Track your journey to homeownership
              </p>
            </div>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-green-700/30 rounded-xl text-white transition-all flex items-center gap-2">
              <Download className="w-5 h-5" />
              Export Report
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-900/30 to-black/50 backdrop-blur-sm border border-green-700/40 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-xs text-gray-400">+2.3% this month</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {ownershipPercentage}%
              </div>
              <div className="text-sm text-gray-400">Ownership Progress</div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-black/50 backdrop-blur-sm border border-green-700/40 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                ${equityBuilt.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Total Equity Built</div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-black/50 backdrop-blur-sm border border-green-700/40 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {paymentsMade}/{totalPayments}
              </div>
              <div className="text-sm text-gray-400">Payments Made</div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-black/50 backdrop-blur-sm border border-green-700/40 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">6.5</div>
              <div className="text-sm text-gray-400">
                Years to Full Ownership
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Ownership Progress */}
              <div className="bg-gradient-to-br from-green-900/20 to-black/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Ownership Progress
                  </h2>
                  <button className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 text-sm">
                    View on Blockchain
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400">Current Ownership</span>
                    <span className="text-3xl font-bold text-green-400">
                      {ownershipPercentage}%
                    </span>
                  </div>
                  <div className="relative h-6 bg-black/50 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-1000"
                      style={{ width: `${ownershipPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-2">
                      Property Value
                    </div>
                    <div className="text-2xl font-bold text-white">
                      $425,000
                    </div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-2">
                      Your Equity
                    </div>
                    <div className="text-2xl font-bold text-green-400">
                      ${equityBuilt.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment History */}
              <div className="bg-gradient-to-br from-green-900/20 to-black/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Recent Payments
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      date: "2025-01-01",
                      amount: 1850,
                      equity: 520,
                      status: "Completed",
                    },
                    {
                      date: "2024-12-01",
                      amount: 1850,
                      equity: 520,
                      status: "Completed",
                    },
                    {
                      date: "2024-11-01",
                      amount: 1850,
                      equity: 520,
                      status: "Completed",
                    },
                    {
                      date: "2024-10-01",
                      amount: 1850,
                      equity: 520,
                      status: "Completed",
                    },
                    {
                      date: "2024-09-01",
                      amount: 1850,
                      equity: 520,
                      status: "Completed",
                    },
                  ].map((payment, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-black/30 rounded-xl hover:bg-black/40 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">
                            ${payment.amount.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-400">
                            {payment.date}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-semibold">
                          +${payment.equity}
                        </div>
                        <div className="text-xs text-gray-400">
                          Equity Added
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Your Property */}
              <div className="bg-gradient-to-br from-green-900/30 to-black/50 backdrop-blur-sm border border-green-700/40 rounded-2xl overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={Property4}
                    alt="Your property"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Modern Family Home
                  </h3>
                  <div className="text-sm text-gray-400 mb-4">Austin, TX</div>
                  <Link
                    to="/properties"
                    className="flex items-center justify-between text-green-400 hover:text-green-300 transition-colors"
                  >
                    <span className="font-semibold">View Property</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Next Payment */}
              <div className="bg-gradient-to-br from-green-900/30 to-black/50 backdrop-blur-sm border border-green-700/40 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Next Payment
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Due Date</span>
                    <span className="text-white font-semibold">
                      {nextPayment}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Amount</span>
                    <span className="text-2xl font-bold text-green-400">
                      ${monthlyAmount.toLocaleString()}
                    </span>
                  </div>
                  <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all hover:scale-105">
                    Make Payment
                  </button>
                </div>
              </div>

              {/* Blockchain Verification */}
              <div className="bg-gradient-to-br from-green-900/30 to-black/50 backdrop-blur-sm border border-green-700/40 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Blockchain Verification
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Network</span>
                    <span className="text-white">Hedera</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Token ID</span>
                    <span className="text-white font-mono text-xs">
                      0x7a8f...3d2e
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Last Updated</span>
                    <span className="text-white">2 hours ago</span>
                  </div>
                  <button className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center justify-center gap-2 mt-4">
                    View on Explorer
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
