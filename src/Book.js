// import index.css from "../index.css"
const Book = (props) => {
    const { img, author, title, id,} = props;
    // const key = key
    // console.log(killadi);
    return (
      <article className="book">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <span className="number">#{id}</span>
      </article>
    );
  };

  export default Book