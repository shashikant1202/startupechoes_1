import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { FiPlus, FiList, FiSettings, FiUser } from 'react-icons/fi';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('newPost');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [category, setCategory] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);

  const categories = ['Startups', 'Business', 'Economic', 'Market','Other'];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFeaturedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission logic here
    console.log({ postTitle, postContent, category, featuredImage });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Dashboard Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <nav>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => setActiveTab('newPost')}
                    className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
                      activeTab === 'newPost'
                        ? 'bg-red-500 text-white'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    <FiPlus />
                    <span>New Post</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('posts')}
                    className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
                      activeTab === 'posts'
                        ? 'bg-red-500 text-white'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    <FiList />
                    <span>All Posts</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
                      activeTab === 'profile'
                        ? 'bg-red-500 text-white'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    <FiUser />
                    <span>Profile</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
                      activeTab === 'settings'
                        ? 'bg-red-500 text-white'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    <FiSettings />
                    <span>Settings</span>
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeTab === 'newPost' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create New Post</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title Input */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-200 mb-2">Post Title</label>
                    <input
                      type="text"
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500"
                      placeholder="Enter post title"
                    />
                  </div>

                  {/* Category Select */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-200 mb-2">Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Featured Image Upload */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-200 mb-2">Featured Image</label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="featured-image"
                      />
                      <label
                        htmlFor="featured-image"
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        Choose Image
                      </label>
                      {featuredImage && (
                        <img src={featuredImage} alt="Preview" className="h-20 w-20 object-cover rounded-lg" />
                      )}
                    </div>
                  </div>

                  {/* Rich Text Editor */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-200 mb-2">Content</label>
                    <Editor
                      apiKey="your-tinymce-api-key"
                      value={postContent}
                      onEditorChange={(content) => setPostContent(content)}
                      init={{
                        height: 500,
                        menubar: true,
                        plugins: [
                          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                          'bold italic forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | bullist numlist outdent indent | ' +
                          'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Publish Post
                    </button>
                  </div>
                </form>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 