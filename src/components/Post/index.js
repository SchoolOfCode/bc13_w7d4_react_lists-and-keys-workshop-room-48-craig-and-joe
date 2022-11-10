import React from 'react';

import './index.css';

function Post({title, date, author, text, highlights, image }) {
  return <article> <img src={image.link} alt={image.alt} width={'80%'}  /> <h1>{title}</h1> <h3>{author}</h3><time>{date}</time> <p>{text}</p> {highlights.map((highlight, index) => {
    return <li>{highlight}{index}</li>
  })} </article>;
}

//not including image or image properties
// <img src=(image.link) alt=(image.alt) />

//<Post key={postId} title={title} date={date} author={author} text={text} highlights={highlights} link={link} alt={alt}/>


export default Post;
