import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignList from "./components/SignList";
import NewArticle from "./components/NewArticle";
import Sign from "./components/Sign";
import Articles from "./components/Articles";
import EditArticle from "./components/EditArticle";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<SignList />} />
          <Route path="/new" element={<NewArticle />} />
          <Route path="/sign/:id" element={<Sign />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/edit/:id" element={<EditArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
