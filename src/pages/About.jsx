import { Home, Mail, MapPin, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("[v0] Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
 
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            About OwnChain
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            We're on a mission to make homeownership accessible to everyone
            through the power of blockchain technology
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-green-900/20 to-black/40 backdrop-blur-sm border border-green-700/30 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              For too long, the dream of homeownership has been out of reach for
              millions of hardworking individuals and families. Traditional
              rent-to-own programs are plagued with hidden fees, opaque terms,
              and broken promises. We knew there had to be a better way.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              OwnChain was founded on the belief that blockchain technology
              could revolutionize the path to homeownership. By leveraging the
              transparency, security, and immutability of the Hedera blockchain,
              we've created a system where every rent payment builds real,
              verifiable equity from day one.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our platform eliminates the uncertainty and distrust that has
              plagued traditional rent-to-own arrangements. With OwnChain, you
              can track your ownership progress in real-time, access your
              complete payment history, and have absolute confidence that your
              path to homeownership is secure and transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description:
                  "Every transaction, every payment, every ownership token is recorded on the blockchain for complete visibility. No hidden fees, no surprises, no fine print.",
              },
              {
                title: "Accessibility",
                description:
                  "Homeownership should be achievable for everyone. We work with diverse financial situations and provide flexible payment options to make your dream home a reality.",
              },
              {
                title: "Innovation",
                description:
                  "We leverage cutting-edge blockchain technology to solve age-old problems in real estate. Our platform represents the future of property ownership.",
              },
              {
                title: "Trust",
                description:
                  "By using immutable blockchain records, we eliminate the need for blind trust. Your ownership is mathematically verified and permanently secured.",
              },
              {
                title: "Empowerment",
                description:
                  "We put control back in your hands. Your ownership tokens are yours to hold, transfer, or use as you see fit. True ownership from day one.",
              },
              {
                title: "Community",
                description:
                  "We're building more than a platform—we're creating a community of future homeowners supporting each other on the journey to ownership.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-green-900/20 to-black/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-8 hover:border-green-600/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
                Our Impact
              </h2>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: "5,400+", label: "Active Renters" },
                  { value: "1,200+", label: "Properties" },
                  { value: "$42M+", label: "Equity Built" },
                  { value: "850+", label: "Homes Owned" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-green-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-400">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-900/20 to-black/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Email</div>
                      <div className="text-white font-semibold">
                        support@ownchain.io
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Phone</div>
                      <div className="text-white font-semibold">
                        1-800-OWN-CHAIN
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Office</div>
                      <div className="text-white font-semibold">
                        123 Blockchain Avenue
                        <br />
                        San Francisco, CA 94102
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-black/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-green-400">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-green-400">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-green-900/20 to-black/40 backdrop-blur-sm border border-green-700/30 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black/30 border border-green-700/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-600/50 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black/30 border border-green-700/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-600/50 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black/30 border border-green-700/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-600/50 transition-colors"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 bg-black/30 border border-green-700/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-600/50 transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-900/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>
            &copy; 2025 OwnChain. All rights reserved. Powered by Hedera
            Blockchain.
          </p>
        </div>
      </footer>
    </div>
  );
}
