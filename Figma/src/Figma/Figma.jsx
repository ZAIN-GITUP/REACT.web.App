import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import pict from "../assets/imgs/icons/Bill_smit.png";
import home from "../assets/imgs/icons/home.png";
import time from '../assets/imgs/icons/timer.png';
import massage from '../assets/imgs/icons/masseges.png';
import notifi from '../assets/imgs/icons/notifi.png';
import state from '../assets/imgs/icons/static.png';
import setting from '../assets/imgs/icons/setting.png';
import log from '../assets/imgs/icons/log.png';
import employee from '../assets/imgs/icons/emplyoee.png';
import deleting from '../assets/imgs/icons/delete.png';
import exporting  from '../assets/imgs/icons/export.png';
import deletingall  from '../assets/imgs/icons/deleteall.png';
import add  from '../assets/imgs/icons/addbox.png';
import view from '../assets/imgs/icons/view.png';
import edit from '../assets/imgs/icons/editing.png';
import profilep from '../assets/imgs/icons/profile.png';
import searching from '../assets/imgs/icons/search.png';
import Postbuttomsection from "./Postbuttomsection";
import EditPostModal from "./EditPostModals";
import AddPostModal from "./AddPostModal";
const PostPageFigma = () => {
  const { postId } = useParams();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(11);

  const [isExpanded, setIsExpanded] = useState(false);

  const [selectAll, setSelectAll] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState([]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEditPost, setCurrentEditPost] = useState(null);



  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (postId) {
      const fetchPostAndUser = async () => {
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postData = await postResponse.json();
        setSelectedPost(postData);

        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
        const userData = await userResponse.json();
        setUser(userData);
      };

      fetchPostAndUser();
    }
  }, [postId]);

  // Pagination 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Page number 
  const firstSetOfPages = [1, 2, 3, 4, 5];
  const lastSetOfPages = totalPages > 5 ? [totalPages - 1, totalPages] : [];
  const middlePages = totalPages > 8 ? [6, 7, 8] : [];

  const truncateTitle = (title) => {
    const words = title.split(' ');
    return words.length > 2 ? words.slice(0, 2).join(' ') + '' : title;
  };

  

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedPosts(currentPosts.map(post => post.id));
    } else {
      setSelectedPosts([]);
    }
  };

  const handleSelectPost = (postId) => {
    if (selectedPosts.includes(postId)) {
      setSelectedPosts(selectedPosts.filter(id => id !== postId));
    } else {
      setSelectedPosts([...selectedPosts, postId]);
    }
  };
  const handleDeleteSelectedPosts = () => {
    setPosts(posts.filter(post => !selectedPosts.includes(post.id)));
    setSelectedPosts([]);
    setSelectAll(false);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
    setSelectedPosts(selectedPosts.filter(postId => postId !== id));
  };

  const handleEditClick = (post) => {
    setCurrentEditPost(post);
    setIsEditModalOpen(true);
  };

  const handleSavePost = (updatedPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const handleSaveNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };
  return (
    <div className="flex container h-fit w-full  lx :w-full">
      <div className='bg-white fixed sm:fixed md:fixed lg:fixed'>
        <div className='mt-16'>
          <h2 className='m-4 flex items-center text-gray-600 gap-1'>
            <img className="w-4 h-4" src={home} alt="" /> Home
          </h2>
          <h2 className='m-4 flex bg-blue-600 text-white px-6 rounded-s-sm p-1'>
            <img className="w-3 h-3" src={employee} alt="" />Employee
          </h2>
          <h2 className='m-4 flex items-center text-gray-600 gap-1'>
            <img className="w-4 h-4" src={time} alt="" />Time Tracking
          </h2>
          <h2 className='m-4 flex items-center text-gray-600 gap-1'>
            <img className="w-4 h-4" src={massage} alt="" />Massaging
          </h2>
          <h2 className='m-4 flex items-center text-gray-600 gap-1'>
            <img className="w-4 h-4" src={state} alt="" />Statistics
          </h2>
          <h2 className='m-4 flex items-center text-gray-600 gap-1'>
            <img className="w-4 h-4" src={setting} alt="" />Settings
          </h2>
          <h2 className='m-4 flex items-center text-gray-600 gap-1'>
            <img className="w-4 h-4" src={log} alt="" />LogOut
          </h2>
        </div>
      </div>

      <div className="ml-40 left-0  w-full right-0">
        <div className="p-2 ml-1 place-items-start flex bg-slate-200 w-full">
          <div className="flex">
            <form className="max-w-md ml-4">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search..</label>
              <div className="">
                <div className="absolute mt-1 pointer-events-none">
                  <img className="w-6 h-6 mt-2 ml-4 opacity-30 text-gray-500 dark:text-gray-400 justify-center items-center" src={searching} alt="" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="w-72 p-2 ps-10 text-sm text-gray-600 rounded-smm-2 mt-2 bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search.."
                  required
                />
              </div>
            </form>
          </div>
          <div className='ml-96 flex mt-4 items-center h-4'>
            <p className='ml-52 justify-center items-center p-2 w-10 h-10 rounded-full hover:shadow-xl hover:bg-slate-400'>
              <img className="w-8 h-6" src={notifi} alt="" />
            </p>
            <img src={pict} alt="" className='object-center m-2 w-10 h-10 rounded-full' />
            <p className='text-sm py-4'>Bill Smith</p>
          </div>
        </div>

        <div className='ml-1 mt-1 h-screen'>
          <div className="flex bg-slate-200 justify-between mb-0">
            <div>
              <h2 className='text-xl opacity-90 ml-4 p-1 w-full'>Employees</h2>
            </div>
            <div className="flex items-center justify-end">
              <button className='p-1  flex mx-2 bg-slate-200 rounded-md w-14 hover:shadow-xl hover:bg-slate-400' onClick={() => handleAddClick(posts)}>ADD<img className="h-4 w-4 object-cover mt-1" src={add} alt="" /></button>
              <button className='p-1 m-2 flex  bg-slate-200 rounded-md w-16  hover:shadow-xl hover:bg-slate-400'>Export<img className="h-4 w-4 mt-1 object-cover" src={exporting}lt="" /></button>
              <button    className={`p-1  flex mr-6 bg-slate-200 rounded-md w-20 hover:shadow-xl hover:bg-slate-400 ${selectedPosts.length === 0 ? 'opacity-70 cursor-not-allowed' : ''}`}
        onClick={handleDeleteSelectedPosts}
        disabled={selectedPosts.length === 0}
             > DeleteAll <img className="h-4 w-4 object-cover mt-1" src={deletingall} alt="" /></button>
            </div>
          </div>

          <div className="px-2 py-2 w-full h-auto bg-slate-200 sm:bg-slate-200 md:bg-slate-200 justify-between">
            <table className="bg-white mr-6 w-full divide-y divide-gray-300 rounded-md">
            <thead className="w-full">
    <tr>

    <th className="px-0 py-3 text-left text-xs font-medium text-gray-500 uppercase"><input className=" m-2 "
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectAll}
                          />
      ID</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
      <th className="px-0  py-3 text-left text-xs font-medium text-gray-500 uppercase">View</th>
      <th className="px-0 py-3 text-left text-xs font-medium text-gray-500 uppercase">Edit</th>
      <th className="px-0 py-3 text-left text-xs font-medium text-gray-500 uppercase">Delete</th>
    </tr>
  </thead>
           

                    
  <tbody className="divide-y divide-gray-300">
  {currentPosts.map((post) => (
    <tr
      key={post.id}
      className={selectedPosts.includes(post.id) ? "bg-gray-200" : ""}
    >
      <td className="flex px-2 mt-2">
        <input
          type="checkbox"
          checked={selectedPosts.includes(post.id)}
          onChange={() => handleSelectPost(post.id)}
        />
        <span className="text-gray-400 hover:underline mx-2 ml-2">
          {post.id}
        </span>
      </td>
      <td className="pl-0 py-0">
        <p className="flex">
          <img className="w-8 h-8 m-2 object-cover" src={profilep} alt="" />
          <p className="flex flex-col opacity-60">
            <h3 className="text-sm">Dominican Luigi</h3>
            <h6 className="text-xs">Luigi@design.com</h6>
          </p>
        </p>
      </td>
      <td className="px-0 py-2 opacity-60 text-sm font-sm">
        <span className="relative group">
          {truncateTitle(post.title)}
          <span className="left-0 text-black text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {post.title}
          </span>
        </span>
      </td>
      <td>
      <button className="relative group">
  <Link to={`/posts/${post.id}`} className="text-gray-400 hover:underline">
    <img className="h-4 w-4 object-cover opacity-70 hover:opacity-100" src={view} alt="View icon" />
  </Link>
  <span className="absolute right-1  -top-2 transform -translate-y-1/2 ml-2 w-max px-2 py-1 text-xs text-white bg-gray-500 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    View
  </span>
</button>


      </td>
      <td>
      <button className="relative group" onClick={() => handleEditClick(post)}>
      
        <img className="h-4 w-4 object-cover opacity-70 hover:opacity-100" src={edit} alt="Edit icon" />
  
      <span className="absolute right-1  -top-2 transform -translate-y-1/2 ml-2 w-max px-2 py-1 text-xs text-white bg-gray-500 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Edit
      </span>
    </button>
      </td>
      <td>
        <button
         className="relative group" onClick={() => handleDeletePost(post.id)}>
          <img className="h-4 w-4 object-cover opacity-70" src={deleting} alt="" />
          <span className="absolute left-1  -top-2 transform -translate-y-1/2 ml-2 w-max px-2 py-1 text-xs text-white bg-gray-500 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Delete
      </span>
        </button>
      </td>
    </tr>
  ))}
</tbody></table>

            {/* Pagination Section */}
            <div className="md:bg-slate-200 w-full">
              <div className="xl:bg-white flex items-center justify-between w-full h-20 p-6 sm:m-0 sm:p-0">
                {/* Previous Button */}
                <div className="flex items-center justify-start">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    className={`bg-white flex items-center text-black rounded-md border-gray-400 border w-24 mx-1 p-1 mt-2 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    disabled={currentPage === 1}
                  >
                    <FaArrowLeft />
                    <h4 className="text-center text-black ml-2">Previous</h4>
                  </button>
                </div>

                {/* Pagination Numbers */}
                <div className="flex h-6 w-60 m-2 items-center space-x-2">
                  {/* First set of page numbers */}
                  {firstSetOfPages.map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => paginate(pageNumber)}
                      className={`text-black border-gray-200 border p-1 ${currentPage === pageNumber ? "opacity-30 cursor-not-allowed" : "bg-white cursor-pointer"}`}
                      disabled={currentPage === pageNumber}
                    >
                      {pageNumber}
                    </button>
                  ))}

                  {/* Conditional display for additional pages */}
                  {totalPages > 8 && (
                    <>
                      {!isExpanded && (
                        <>
                          <button
                            onClick={() => setIsExpanded(true)}
                            className="text-black p-1 border-gray-200 border bg-white cursor-pointer"
                          >
                            .....
                          </button>
                          {/* Last set of page numbers when not expanded */}
                          {lastSetOfPages.map((pageNumber) => (
                            <button
                              key={pageNumber}
                              onClick={() => paginate(pageNumber)}
                              className={`text-black border-gray-200 border p-1 ${currentPage === pageNumber ? "opacity-30 cursor-not-allowed" : "bg-white cursor-pointer"}`}
                              disabled={currentPage === pageNumber}
                            >
                              {pageNumber}
                            </button>
                          ))}
                        </>
                      )}

                      {isExpanded && (
                        <>
                          {/* Middle set of page numbers when expanded */}
                          {middlePages.map((pageNumber) => (
                            <button
                              key={pageNumber}
                              onClick={() => paginate(pageNumber)}
                              className={`text-black border-gray-200 border p-1 ${currentPage === pageNumber ? "opacity-30 cursor-not-allowed" : "bg-white cursor-pointer"}`}
                              disabled={currentPage === pageNumber}
                            >
                              {pageNumber}
                            </button>
                          ))}
                          {/* Ellipsis button to collapse the view */}
                          <button
                            onClick={() => setIsExpanded(false)}
                            className="text-black border-gray-200 border p-1 bg-white cursor-pointer"
                          >
                            .....
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>

                {/* Next Button */}
                <div>
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    className={`bg-white flex items-center text-black rounded-md border-gray-400 border p-1 w-20 mx-1 mt-2 ${indexOfLastPost >= posts.length && "opacity-40 cursor-not-allowed"}`}
                    disabled={indexOfLastPost >= posts.length}
                  >
                    <h4 className="text-center mr-4">Next</h4>
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              {/* bottom  Section */}
             <Postbuttomsection/>
            </div>
          </div>
        </div>
      </div>
         {/* Edit Post Modal */}
         <EditPostModal
        post={currentEditPost}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSavePost}
      />
         <AddPostModal
        post={currentEditPost}
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveNewPost }
      />
    </div>
  );
};

export default PostPageFigma;
