import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import "./styles/Articles.css";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [postNumber] = useState(3);

  const currentPageNumber = pageNumber * postNumber - postNumber;
  const paginatedPosts = articles.splice(currentPageNumber, postNumber);

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/signs")
      .then((res) => {
        console.log(res.data);
        setArticles(res.data);
      })
      .catch((err) => console.log(err));
  }, [pageNumber]);

  const deleteArticle = (articleId) => {
    axios
      .delete(`http://localhost:8000/api/signs/${articleId}`)
      .then((res) => {
        const newArticles = articles.filter(
          (article) => article._id !== articleId
        );
        setArticles(newArticles);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="nav-link-pink">
        <NavLink to="/new">Add a New Article</NavLink>
      </div>
      <div className="container1">
        {paginatedPosts.map((article) => (
          <div key={article._id} className="article">
            <h2 className="article-title">
              {article.articleName} - {article.sign}
            </h2>
            <hr />
            <p className="article-content">{article.articleContent}</p>
            <Link to={`/articles/edit/${article._id}`}>Edit</Link>
            <span> | </span>
            <button
              style={{ marginTop: "1rem", width: "100px" }}
              onClick={() => deleteArticle(article._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div>Page {pageNumber} </div>
      <div>
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
      </div>
    </>
  );
};

export default ArticleList;
