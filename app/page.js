import ButtonLogin from "@/components/ButtonLogin";
import FAQListItem from "@/components/FAQListItem";
import Image from "next/image";
import productDemo from "./productDemo.jpeg";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  const pricingFeatures = [
    "Unlimited feedback boards",
    "Advanced analytics & insights",
    "Team collaboration tools",
    "Custom branding",
    "Priority email support",
    "Export & reporting tools",
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechCorp",
      quote:
        "CodeFast transformed how we collect user feedback. We shipped 3x more user-requested features this quarter.",
      avatar: "👩‍💼",
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder at StartupXYZ",
      quote:
        "Finally, a feedback tool that actually helps us prioritize what matters. Our users love the transparency.",
      avatar: "👨‍💻",
    },
    {
      name: "Emily Watson",
      role: "Head of UX at DesignStudio",
      quote:
        "The insights we get from CodeFast help us make data-driven decisions. Game changer for our product development.",
      avatar: "👩‍🎨",
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Header */}
      <section className="bg-gradient-to-b from-base-100 to-base-200">
        <div className="flex justify-between items-center px-8 py-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F9B233] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div className="font-extrabold text-xl">CodeFast</div>
          </div>
          <div className="space-x-6 max-md:hidden">
            <a href="#features" className="link link-hover font-medium">
              Features
            </a>
            <a href="#pricing" className="link link-hover font-medium">
              Pricing
            </a>
            <a href="#testimonials" className="link link-hover font-medium">
              Reviews
            </a>
            <a href="#faq" className="link link-hover font-medium">
              FAQ
            </a>
          </div>
          <div>
            <ButtonLogin
              session={session}
              extraStyle="bg-[#F9B233] text-white hover:bg-[#e2a12c] shadow-lg px-6 py-2 rounded-full font-semibold"
            />
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-gradient-to-br from-base-100 via-base-200 to-base-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="text-center py-20 px-8 max-w-6xl mx-auto relative z-10">
          <div className="inline-block bg-[#F9B233]/10 text-[#F9B233] px-4 py-2 rounded-full text-sm font-semibold mb-8">
            🚀 Join 10,000+ teams building better products
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Turn Customer
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9B233] to-[#ff6b35]">
              {" "}
              Feedback
            </span>
            <br />
            Into Product
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#00f2fe]">
              {" "}
              Gold
            </span>
          </h1>
          <div className="text-xl opacity-80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop guessing what your users want. Create beautiful feedback
            boards, prioritize features with confidence, and ship products that
            customers actually love.
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <ButtonLogin
              session={session}
              extraStyle="bg-gradient-to-r from-[#F9B233] to-[#ff6b35] text-white hover:shadow-2xl px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300"
            />
            <button className="btn btn-outline btn-lg rounded-full px-8 font-semibold">
              View Demo
            </button>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#F9B233] to-[#ff6b35] rounded-3xl blur opacity-30"></div>
            <Image
              src={productDemo}
              alt="CodeFast Dashboard Demo"
              className="relative w-full rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-8 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Everything you need to build user-centric products
            </h2>
            <div className="text-xl opacity-80">
              Powerful features designed for modern product teams
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4">Smart Analytics</h3>
              <div className="opacity-80">
                Track feature requests, user engagement, and feedback trends
                with powerful analytics dashboard
              </div>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Priority Scoring</h3>
              <div className="opacity-80">
                Automatically prioritize features based on user votes, business
                impact, and development effort
              </div>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-4">Team Collaboration</h3>
              <div className="opacity-80">
                Keep your entire team aligned with internal comments, status
                updates, and roadmap planning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 px-8 bg-gradient-to-br from-base-200 to-base-300"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Loved by product teams worldwide
            </h2>
            <div className="text-xl opacity-80">
              See what our customers are saying
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm opacity-70">{testimonial.role}</div>
                  </div>
                </div>
                <div className="text-gray-700 italic">{testimonial.quote}</div>
                <div className="flex text-[#F9B233] mt-4">{"★".repeat(5)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-8 bg-base-100" id="pricing">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Simple, transparent pricing
            </h2>
            <div className="text-xl opacity-80">
              Start free, scale as you grow
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="p-8 bg-white rounded-3xl shadow-lg border-2 border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="text-4xl font-black mb-2">Free</div>
                <div className="opacity-60">Perfect for getting started</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  1 feedback board
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  Up to 100 feedback items
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  Basic analytics
                </li>
              </ul>
              <ButtonLogin
                session={session}
                extraStyle="w-full btn btn-outline btn-lg rounded-full font-semibold"
              />
            </div>

            {/* Pro Plan */}
            <div className="p-8 bg-gradient-to-br from-[#F9B233] to-[#ff6b35] rounded-3xl shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-black mb-2">
                  $19<span className="text-lg font-medium">/month</span>
                </div>
                <div className="opacity-90">For growing product teams</div>
              </div>
              <ul className="space-y-4 mb-8">
                {pricingFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLogin
                session={session}
                extraStyle="w-full bg-white text-[#F9B233] hover:bg-gray-100 btn-lg rounded-full font-bold shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8 bg-base-200" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Frequently Asked Questions
            </h2>
            <div className="text-xl opacity-80">
              Everything you need to know
            </div>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "How quickly can I set up my first feedback board?",
                answer:
                  "You can create your first feedback board in under 2 minutes. Just sign up, give your board a name, and start collecting feedback immediately.",
              },
              {
                question:
                  "Can I customize the look and feel of my feedback board?",
                answer:
                  "Yes! Pro users can fully customize their feedback boards with custom branding, colors, and domain names to match their product experience.",
              },
              {
                question: "How do you help prioritize feature requests?",
                answer:
                  "Our smart scoring algorithm considers user votes, business impact, development effort, and your custom criteria to automatically rank feature requests.",
              },
              {
                question: "What happens to my data if I cancel?",
                answer:
                  "You can export all your data anytime. After cancellation, your data remains accessible for 30 days, giving you time to export everything.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "Yes! We offer a 30-day money-back guarantee. If you're not satisfied, email us at support@codefast.com for a full refund.",
              },
            ].map((qa) => (
              <FAQListItem key={qa.question} qa={qa} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-[#F9B233] to-[#ff6b35] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">
            Ready to build products your users will love?
          </h2>
          <div className="text-xl opacity-90 mb-8">
            Join thousands of product teams who use CodeFast to make better
            decisions
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ButtonLogin
              session={session}
              extraStyle="bg-white text-[#F9B233] hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg shadow-lg"
            />
            <div className="text-sm opacity-80">
              ✨ No credit card required • 30-day money-back guarantee
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
