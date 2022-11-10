import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return <main id="main">
 
  {posts.map(({ postId, title, date, author, text, highlights, image }) => {
    return <Post key={postId} title={title} date={date} author={author} text={text} highlights={highlights} image={image} />
  } )}
  </main>; 
  }

  // we want this <Post/>
    // We a data structure
      // for how many posts with this structure- the map method creates enough <Post />
        //create map method function ()
        // wrap it around a <Post /> Component 


export default Main;

// {
//   postId: 1,
//   title: 'One Of My Favourites',
//   date: '12/10/20',
//   author: 'Bobby Nest',
//   text: lorem.generateParagraphs(7),
//   highlights: [
//     lorem.generateWords(3),
//     lorem.generateWords(3),
//     lorem.generateWords(3),
//   ],
//   image: {
//     link:
//       'https://i.pinimg.com/originals/71/a0/5f/71a05f47b8f449fc231881416bf4bc66.jpg',
//     alt: 'A blue-grey pigeon turns to face the camera.',
//   },
// }

// {posts.map(({postId, title, date, author, text, highlights, link, alt}) => {
//   return <main id="main">
//     <Post key={postId}, title={title}, date={date}, author={author}, text={text}, highglights={highlights}, url={link}, alt={alt} /> 
//   </main>; 
//   }}