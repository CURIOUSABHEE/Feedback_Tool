"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";

const FormAddPost = () => {
  const router = useRouter();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      // Get boardId from URL params (assuming you're on a board page)
      const boardId = params.boardId; // or however you get the current board ID

      if (!boardId) {
        toast.error("Board ID is missing");
        return;
      }

      // Call the correct API endpoint with correct data structure
      const response = await axios.post(`/api/post?boardId=${boardId}`, {
        title: title, // Use 'title' not 'name'
        description: description,
      });

      console.log("Post created:", response.data);
      setTitle("");
      setDescription("");

      toast.success("Post created successfully!");
      router.refresh();
    } catch (e) {
      const errorMessage =
        e.response?.data?.error || e.message || "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8 w-full md:w-96 shrink-0 md:sticky top-16"
      onSubmit={handleSubmit}
    >
      <div>
        <p className="font-extrabold text-lg">Create new feedback Post</p>
      </div>

      <div>
        <label className="form-control w-full">
          <div>
            <span className="label-text font-extrabold">Post Title</span>
          </div>
          <input
            required
            type="text"
            className="input input-bordered"
            placeholder="Type here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <fieldset className="fieldset">
          <legend className="fieldset-legend font-bold">Description</legend>
          <textarea
            required
            className="textarea h-24"
            placeholder="Enter description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </fieldset>
      </div>

      <div>
        <button className="btn btn-primary" type="submit" disabled={isLoading}>
          {isLoading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            "Create Post"
          )}
        </button>
      </div>
    </form>
  );
};

export default FormAddPost;
