import { auth } from "@/auth";
import ButtonLogout from "@/components/ButtonLogout";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Link from "next/link";

async function getUser() {
  const session = await auth();

  if (!session || !session.user?.id) {
    throw new Error("Not authenticated");
  }

  await connectMongo();

  return await User.findById(session.user.id);
}

export default async function support() {
  try {
    const user = await getUser();

    return (
      <main className="bg-base-200 min-h-screen">
        {/* HEADER */}
        <section className="bg-base-100">
          <div className="max-w-5xl mx-auto px-5 py-3 flex justify-between">
            <ButtonLogout />
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-5 py-12 space-y-12">
          <div className="text-center">
            <h1 className="font-extrabold text-3xl mb-2">Support Center</h1>
            <p className="text-base-content/70">How can we help you today?</p>
          </div>

          {/* FAQ SECTION */}
          <div className="bg-base-100 p-6 rounded-2xl">
            <h2 className="font-extrabold text-xl mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">
                  How do I create a new board?
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70">
                    Click the New Board button on your dashboard and enter a
                    name for your board. You can start adding tasks immediately
                    after creation.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">
                  Can I share boards with other users?
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70">
                    Yes! You can invite teammates to collaborate and share boards together.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">
                  What happens if I cancel my subscription?
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70">
                    Your boards will remain accessible at all times. No subscriptions required.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT OPTIONS */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-base-100 p-6 rounded-2xl hover:bg-neutral hover:text-neutral-content duration-500">
              <h3 className="font-bold text-lg mb-3">Email Support</h3>
              <p className="text-base-content/70 mb-4">
                Get help via email within 24 hours
              </p>
              <Link
                href="mailto:support@yourapp.com"
                className="btn btn-primary btn-sm"
              >
                Send Email
              </Link>
            </div>

            <div className="bg-base-100 p-6 rounded-2xl hover:bg-neutral hover:text-neutral-content duration-500">
              <h3 className="font-bold text-lg mb-3">Live Chat</h3>
              <p className="text-base-content/70 mb-4">
                Chat with our team in real-time
              </p>
              <button className="btn btn-secondary btn-sm">Start Chat</button>
            </div>
          </div>

          {/* USER INFO */}
          <div className="bg-base-100 p-6 rounded-2xl">
            <h3 className="font-bold text-lg mb-4">Account Information</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Email:</span>
                <span className="ml-2 text-base-content/70">{user.email}</span>
              </div>
              <div>
                <span className="font-medium">Member since:</span>
                <span className="ml-2 text-base-content/70">
                  {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {/* HELPFUL LINKS */}
          <div className="bg-base-100 p-6 rounded-2xl">
            <h3 className="font-bold text-lg mb-4">Helpful Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-primary hover:underline">
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-primary hover:underline"
                >
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="text-primary hover:underline"
                >
                  {"What's New"}
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-primary hover:underline">
                  Send Feedback
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Support page error:", error);
    return (
      <main className="bg-base-200 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold text-error">
            Error loading support page
          </h1>
          <p className="text-base-content/70">Please try logging in again</p>
        </div>
      </main>
    );
  }
}
