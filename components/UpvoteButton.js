"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function UpvoteButton({ postId, initialVotesCount = 0 }) {
  const localStorageKeyName = `hasVoted-${postId}`;

  const [isVoting, setIsVoting] = useState(false);
  const [votesCount, setVotesCount] = useState(initialVotesCount);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    setHasVoted(localStorage.getItem(localStorageKeyName) === "true");
  }, []);
  const handleVote = async () => {
    if (isVoting) return;

    setIsVoting(true);
    try {
      if (hasVoted) {
        setHasVoted(false);
        setVotesCount((current) => current - 1);
        await axios.delete(`/api/vote?postId=${postId}`);
        localStorage.removeItem(localStorageKeyName);
      } else {
        setHasVoted(true);
        setVotesCount((current) => current + 1);
        await axios.post(`/api/vote?postId=${postId}`);
        localStorage.setItem(localStorageKeyName, "true");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || error.message || "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setIsVoting(false);
    }
  };

  const formatVoteCount = (count) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  return (
    <button
      onClick={handleVote}
      disabled={isVoting}
      aria-label={hasVoted ? "Remove upvote" : "Upvote post"}
      className={`
        relative group transition-all duration-200 ease-out
        w-12 h-12 rounded border flex flex-col items-center justify-center gap-0.5 hover:-translate-y-0.5
        ${
          isVoting
            ? "bg-gray-50 border-gray-200 cursor-not-allowed"
            : hasVoted
              ? "bg-indigo-600 border-indigo-600 text-white"
              : "bg-white border-gray-300 text-gray-600  hover:bg-gray-50 hover:border-base-content/50 "
        }
      `}
    >
      {isVoting ? (
        <div className="w-3 h-3 border border-gray-400 border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <>
          <svg
            className="w-4 h-4 group-hover:-translate-y-1 duration-1000 "
            fill={hasVoted ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
          <span className="text-xs font-medium leading-none">
            {formatVoteCount(votesCount)}
          </span>
        </>
      )}
    </button>
  );
}
