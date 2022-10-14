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
    <Routes>
      <Route path="/" component={<Header />}>

        <Route exact path='/' component={<PostsList />} />

        <Route path="/post">
          <Route path="add/" component={<AddPostForm />} />
          <Route path="view/:postId" component={<SinglePostPage />} />
          <Route path="edit/:postId" component={<EditPostForm />} />
        </Route>

        <Route path="/" component={<Navigate to="/" />} />

      </Route>
    </Routes>

  );
}

export default App

