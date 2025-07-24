import { auth } from "@/auth";
import ButtonLogout from "@/components/ButtonLogout";
import FormNewBoard from "@/components/FormNewBoard";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Board from "@/models/Board";
import Link from "next/link";

async function getUser() {
  const session = await auth();

  if (!session || !session.user?.id) {
    throw new Error("Not authenticated");
  }

  await connectMongo(); // Fix: Call as function with parentheses

  return await User.findById(session.user.id).populate("boards");
}

export default async function dashboard() {
  try {
    const user = await getUser();

    return (
      <main className="bg-base-200 min-h-screen">
        {/* HEADER */}
        <section className="bg-base-100">
          <div className="max-w-5xl mx-auto px-5 py-3 flex justify-between ">
            <></>
            <ButtonLogout />
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-5 py-12 space-y-12">
          <FormNewBoard />
          <div className="">
            <h1 className="font-extrabold text-xl px-4 py-4">
              {user.boards.length} Boards
            </h1>

            <ul>
              {user.boards.map((board) => {
                // Fix: Use .map() method correctly
                return (
                  <li
                    key={board._id}
                    className="bg-base-100 p-4 mb-2 rounded-2xl hover:bg-neutral hover:text-neutral-content duration-500"
                  >
                    <Link href={`/dashboard/b/${board._id}`}>{board.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Dashboard error:", error);
    return (
      <main className="bg-base-200 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold text-error">
            Error loading dashboard
          </h1>
          <p className="text-base-content/70">Please try logging in again</p>
        </div>
      </main>
    );
  }
}
