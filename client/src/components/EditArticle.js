import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/NewArticle.css";
const EditArticle = () => {
  const [articleName, setArticleName] = useState("");
  const [sign, setSign] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/signs/${id}`)
      .then((res) => {
        console.log(res.data);
        setArticleName(res.data.articleName);
        setSign(res.data.sign);
        setArticleContent(res.data.articleContent);
      })
      .catch((err) => console.log("GET ARTICLE BY ID ERROR", err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/signs/${id}`, {
        articleName,
        sign,
        articleContent,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/articles");
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err.response.data.err.errors);
      });
  };

  return (
    <div className="article-card">
      <form className="card-form" onSubmit={handleSubmit}>
        <label>Article name: </label>
        <input
          type="text"
          value={articleName}
          onChange={(e) => setArticleName(e.target.value)}
        />
        {errors.articleName && (
          <span className="text-danger">{errors.articleName.message}</span>
        )}
        <br />
        <label>Select sign: </label>
        <select
          value={sign}
          name="sign"
          onChange={(e) => setSign(e.target.value)}
        >
          <option>Select sign: </option>
          <option value="Aries">Aries</option>
          <option value="Taurus">Taurus</option>
          <option value="Gemini">Gemini</option>
          <option value="Cancer">Cancer</option>
          <option value="Leo">Leo</option>
          <option value="Virgo">Virgo</option>
          <option value="Libra">Libra</option>
          <option value="Scorpio">Scorpio</option>
          <option value="Sagittarius">Sagittarius</option>
          <option value="Capricorn">Capricorn</option>
          <option value="Aquarius">Aquarius</option>
          <option value="Pisces">Pisces</option>
        </select>
        {errors.sign && (
          <span className="text-danger">{errors.sign.message}</span>
        )}
        <br />
        <label>Article content: </label>
        <input
          type="text"
          value={articleContent}
          onChange={(e) => setArticleContent(e.target.value)}
        />
        {errors.articleContent && (
          <span className="text-danger">{errors.articleContent.message}</span>
        )}
        <br />
        <button>Update Article</button>
      </form>
    </div>
  );
};

export default EditArticle;
