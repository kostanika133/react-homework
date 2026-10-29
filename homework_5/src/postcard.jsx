function Popup({ post, onDealite }) {
  return (
    <div className="main_body">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => onDealite(post.id)}>Dealite</button>
    </div>
  );
}

export default Popup;
