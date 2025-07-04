'use client';

import { useState } from 'react';
import axios from 'axios';

export default function PostsPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccess(null);
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body: content,
        userId: 1,
      });
      setSuccess('Post submitted successfully!');
      console.log(response.data);
    } catch (err) {
      setError('Failed to submit the post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Post Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            required
          />
        </div>
        <div>
          <label htmlFor="content">Post Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter post content"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Post'}
        </button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
