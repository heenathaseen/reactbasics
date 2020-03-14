import React from 'react';
import {
   Switch, Route
} from 'react-router-dom';


const ArticlePost = () => {
    const { articlepost } = useParams();
    return (
      <>
        <Switch>
          <Route path=":articlepost" />
        </Switch>
        <h2>Article: {articlepost}</h2>
      </>
    );
  };
  
  const articlePostData = [
    { id: 4, title: "Article Four", url: "article-four" },
    { id: 5, title: "Article Five", url: "article-five" },
    { id: 6, title: "Article Six", url: "article-six" }
  ];
  
  const BlogPost = () => (
    <>
      <h3>Blog Post</h3>
      <ul>
        {articlePostData.map(a => (
          <li key={a.id} style={{ float: "none" }}>
            <Link to={`/${a.url}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );

  export default BlogPost;
  