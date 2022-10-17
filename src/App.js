import React from 'react'
import {
  BrowserRouter as
    Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import Header from './components/Header'

import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/Forms/AddPostForm'
import EditPostForm from './features/posts/Forms/EditPostForm'
import SinglePostPage from './features/posts/SinglePostPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<PostsList />} />
        <Route path="">
          <Route path="add" element={<AddPostForm />} />
          <Route path="/view/:postId" element={<SinglePostPage />} />
          <Route path="/edit/:postId" element={<EditPostForm />} />
        </Route>
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App

