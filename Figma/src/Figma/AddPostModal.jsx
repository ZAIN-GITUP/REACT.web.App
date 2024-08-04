import React, { useState } from 'react';

const AddPostModal = ({ isOpen, onClose, onSave }) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSave = () => {
    const newPost = {
      id , // Use provided ID or generate a new one
      title,
      body,
    };
    onSave(newPost);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <h2 className="text-xl mb-4">Add New Post</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <div className="mb-4">
            <label htmlFor="post-id" className="block text-gray-700">ID (Optional)</label>
            <input 
              id="post-id"
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
            
                min="0"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter ID "
            
            />
          </div>
          <div className="mb-4">
            <label htmlFor="post-title" className="block text-gray-700">Title</label>
            <input
              id="post-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="post-body" className="block text-gray-700">Body</label>
            <textarea
              id="post-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              rows="4"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
              disabled={!title || !body ||!id}  // Disable button if title or body is empty
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPostModal;
