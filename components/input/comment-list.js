import classes from "./comment-list.module.css";

function CommentList(props) {
  const { items } = props;
  console.log("ITEMS", items);

  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {items.map((item) => (
        <li key={item.newComment._id}>
          <p>{item.newComment.text}</p>
          <div>
            By <address>{item.newComment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
