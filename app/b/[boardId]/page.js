import FormAddPost from "@/components/FormAddPost";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import Post from "@/models/Post";
import { redirect } from "next/navigation";
import CardPost from "@/components/CardPost";

const getBoard = async (boardId) => {
  await connectMongo();

  const board = await Board.findById(boardId);
  const posts = await Post.find({ boardId }).sort({ votesCount: -1 });

  if (!board) {
    redirect("/");
  }
  return {
    board,
    posts,
  };
};

export default async function PublicFeedbackBoard({ params }) {
  const boardId = params.boardId;
  const data = await getBoard(boardId);
  const { board, posts } = data;
  return (
    <main className="min-h-screen bg-base-200 ">
      <section className="max-w-5xl mx-auto p-5">
        <h1 className="font-bold text-lg">{board.name}</h1>
      </section>
      <section className="max-w-5xl mx-auto px-5 flex flex-col md:flex-row items-start gap-8 pb-12">
        <FormAddPost boardId={boardId} />
        <ul className="space-y-4 flex-grow">
          {posts.map((post) => (
            <CardPost key={post._id} post={post} />
          ))}
        </ul>
      </section>
    </main>
  );
}
