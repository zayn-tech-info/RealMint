import { CheckCircle2, TrendingUp } from "lucide-react";

export function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Choose Blockchain-Powered Rent-to-Own?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Traditional rent-to-own programs are opaque and complicated.
              RealMint leverages blockchain technology to provide transparency,
              security, and true ownership from day one.
            </p>

            <div className="space-y-4">
              {[
                "Transparent ownership tracking on Hedera blockchain",
                "No hidden fees or surprise costs",
                "Flexible payment schedules that fit your budget",
                "Build equity from your very first payment",
                "Immutable proof of ownership tokens",
                "Transfer or sell your ownership stake anytime",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-900/40 to-black/60 backdrop-blur-sm border border-green-700/40 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-green-700/30">
                  <span className="text-gray-400">Your Ownership Progress</span>
                  <span className="text-2xl font-bold text-green-400">
                    34.5%
                  </span>
                </div>

                <div className="relative h-4 bg-black/50 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 rounded-full"
                    style={{ width: "34.5%" }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1">
                      Payments Made
                    </div>
                    <div className="text-2xl font-bold text-white">42/120</div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-1">
                      Equity Built
                    </div>
                    <div className="text-2xl font-bold text-green-400">
                      $86,250
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-transparent border border-green-700/30 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-gray-300">
                      On track to own in 6.5 years
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
