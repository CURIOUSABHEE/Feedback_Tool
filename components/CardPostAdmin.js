import ButtonDeletePost from "./ButtonDeletePost";

const CardPostAdmin = ({ post, onDelete, onEdit }) => {
  return (
    <li
      key={post._id}
      className="bg-base-100 p-6 rounded-3xl flex justify-between items-center"
    >
      <div>
        <div className="font-bold md-1">{post.title}</div>
        <div className="opacity-80 leading-relevant max-h-32 overflow-scroll">
          {post.description}
        </div>
      </div>
      <ButtonDeletePost postId={post._id.toString()} />
    </li>
  );
};

export default CardPostAdmin;
