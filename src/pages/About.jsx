import axios from 'axios'
import React, { useState } from 'react'
import TodoCard from '../components/TodoCard';

function About() {
  let [posts,setPosts] = useState([])
  let arr = []
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      // console.log(res.data);
      setPosts(res.data)
    }).catch(err=>{
      console.log(err);      
    })
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {posts.map(post => (
        <TodoCard
          key={post.id}
          title={post.title}
          description={post.body}
          onEdit={() => alert(`Edit ID: ${post.id}`)}
          onDelete={() => alert(`Delete ID: ${post.id}`)}
        />
      ))}
    </div>
  )
}

export default About