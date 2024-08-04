
import { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";

import Sidebar from "./Sidebar"
import Postdatanotavialble from "./Postdatanotavialble";
import Postbuttomsection from "./Postbuttomsection";

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [user, setuser] = useState();
  useEffect(() => {
    const fetchPostById = async () => {

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
       
        const data = await response.json();
        setPost(data);
     
    };
    const fetchuserPostById = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${postId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Check if the ID is greater than 10
        if (data.id > 10) {
          setuser(null); // Set post to null to trigger the "not available" message
        } else {
          setuser(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
 fetchPostById();
    fetchuserPostById();
  
  }, [postId]);

  if (!post) {
    return <div className="m-20 p-20">Loading...</div>;
  }  if (!user) {
   return(
    <div className="container mx-auto p-2">
 <div className='bg-white h-screen w-40 fixed sm:fixed md:fixed lg:fixed'>
   <Sidebar/>
      </div>
      <div className="bg-slate-200 w-full p-4 mt-0">
<div className="bg-white  p-4 ml-44 h-auto rounded-md shadow-md">
  <h3 className="text-lg font-semibold mb-4">Post Details</h3>
  <table className="min-w-full divide-y divide-gray-200">
    <thead>
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Field</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-900">ID</td>
        <td
          className="px-6 py-4 text-sm text-gray-500 cursor-pointer"
     
        >
    {post.id}
        </td>
      </tr>
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-900">Title</td>
        <td className="px-6 py-4 text-sm text-gray-500">{post.title}</td>
      </tr>
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-900">Body</td>
        <td className="px-6 py-4 text-sm text-gray-500">{post.body}</td>
      </tr>
    </tbody>
  </table>
</div>
   
<Postdatanotavialble/>
<div className=" ml-44 justify-between rounded ">
<Postbuttomsection/>
</div>
      </div>
      </div>
   )
   }
  
  
  return (
    <div className="container mx-auto p-4">
          <div className='bg-white h-screen w-44 fixed sm:fixed md:fixed lg:fixed'>
   <Sidebar/>
      </div>
        <div className="bg-slate-200 w-full p-4 mt-2">

      
      <div className="bg-white  mt-16 p-4 ml-44 h-auto rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-4">Post Details</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Field</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">ID</td>
                    <td
                      className="px-6 py-4 text-sm text-gray-500 cursor-pointer"
                 
                    >
                {post.id}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Title</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{post.title}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Body</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{post.body}</td>
                  </tr>
                </tbody>
              </table>
      </div>
    
  
      <div className="bg-white  mt-8 p-4 ml-44 h-auto rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-4">user Details</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3   text-left text-xs font-medium text-gray-500 uppercase">Field</th>
                    <th className="px-6 py-3   text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">ID</td>
                    <td
                      className="px-6 py-4 text-sm text-gray-500 cursor-pointer"
                 
                    >
                {user.id}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Name</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{user.name}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">UserName</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{user.username}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">E-mail</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
                  </tr>
                  <tr>
  <td className="px-6 py-4 text-sm font-medium text-gray-900">Address</td>
  <td className="px-6 py-4  gap-2 text-sm text-gray-500">
    Street: {user.address.street}, Suite: {user.address.suite}, City: {user.address.city}, Zipcode: {user.address.zipcode}, Geo: Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
  </td>
</tr>
<tr>
      <td className="px-6 py-4 text-sm font-medium text-gray-900">Details</td>
      <td className="px-6 py-4 text-sm text-gray-500">
       
        Phone: {user.phone}, Website: {user.website}, 
        Company: Name: {user.company.name}, Catchphrase: {user.company.catchPhrase}, BS: {user.company.bs}
      </td>
    </tr>
                </tbody>
              </table>
      </div>
      <div className=" ml-44 justify-between rounded ">
<Postbuttomsection/>
</div>
      </div>
      
    </div>
  );
};

export default PostDetailPage;

