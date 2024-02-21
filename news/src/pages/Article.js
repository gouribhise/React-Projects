import React from "react";
import { useLocation, Link } from "react-router-dom";
const Article = (props) => {
  const location = useLocation();
  console.log("inside article", location.state.article);
  const item = location.state.article;
  return (
    <div className="col-lg-10 mx-auto py-3">
      <Link to={item.url}> {item.title}</Link>
      <p>
        {item.publishedAt.slice(0, 10)} - {item.author}
      </p>
      {item.content ? <p>{item.content}</p> : null}

      {item.urlToImage ? <img src={item.urlToImage} /> : null}

      {item.description ? <p>{item.description}</p> : null}
    </div>
  );
};

export default Article;
