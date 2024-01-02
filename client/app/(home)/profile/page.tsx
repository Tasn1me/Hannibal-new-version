"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./profile.css";
import { useRouter } from 'next/navigation'; 
import { ReactNode } from 'react';
import { MdDelete } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';

interface Result {
  fullName: string;
  email: string;
  role: string;
  password: string;
}

interface LoginProps {
  children?: ReactNode;
  userID: number;
}

interface Product {
  name: string;
  price: number;
  image: string;
  id: number;
}

const Profile: React.FC<LoginProps> = ({ userID }) => {
  const [user, setUser] = useState<Result | null>(null);
  const [posts, setPosts] = useState<Product[]>([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const route = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Result>(`http://localhost:8000/users/4`);
        const responseData: Result = res.data;
        setUser(responseData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Error fetching user data. Please try again later.');
      }
    };
    fetchData();
  }, [userID]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get<Product[]>(`http://localhost:8000/products/sellerProduct/3`);
        const responseData: Product[] = res.data;
        setPosts(responseData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError('Error fetching product data. Please try again later.');
      }
    };
    fetchPosts();
  }, [userID, refresh]);

  
  return (
    <div className="css-fix">
  <div className="bg-gray-100">
      <div className="bg-gray-100">
        <div className="max-w-lg ml-auto my-10 bg-white rounded-md shadow-md p-5 items-center">
          <div className="flex ">
          <div className="text-center text-blue-600 mt-1 mr-2 hover:text-blue-500 cursor-pointer">My Account</div>/
            <div className="text-center text-gray-600 mt-1 mr-2 hover:text-blue-500 cursor-pointer" onClick={()=>{route.push("/profile/edit")}}>Manage Account</div>/
            <div className="text-center text-red-600 mt-1 mr-2 hover:text-blue-500 cursor-pointer">Log Out</div>
  </div>
          
          {/* <button className="logout__action" onClick={() => { handleLogout(); console.log("Logout clicked"); }}>
          Logout
          </button> */}
        </div>
        <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <div className="text-center text-2xl font-semibold mt-3">Account Details:</div>
          {user?.role === "User" && (
            <div>
              <img className="w-32 h-32 rounded-full mx-auto" src="https://static.thenounproject.com/png/165979-200.png" alt="" />
            </div>
          )}
          {user?.role === "Admin" && (
            <div>
              <img className="w-32 h-32 rounded-full mx-auto" src="https://cdn4.iconfinder.com/data/icons/manager-6/332/Untitled-16-512.png" />
            </div>
          )}
          {user?.role=== "Seller" && (
            <div>
              <img className="w-32 h-32 rounded-full mx-auto" src="https://static.thenounproject.com/png/252424-200.png" />
            </div>
          )}
          <div className="text-center text-2xl font-semibold mt-3">
            User Name: {isLoading ? 'Loading...' : user?.fullName}
          </div>
          <div className="text-center text-gray-600 mt-1">
            User Email: {isLoading ? 'Loading...' : user?.email}
          </div>
          <div className="text-center text-gray-600 mt-1">
            User Role: {isLoading ? 'Loading...' : user?.role}
          </div>
        </div>
        <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          
          {user?.role === "User" && (
          <div className="order__history">
            <div className="text-center text-2xl font-semibold mt-3">Order History</div>
            <div className="text-center text-gray-600 mt-1">
              You have not placed any orders yet...
            </div>
            </div>
          )}
            {user?.role === "Seller" && (<div>
            <div className="text-center text-2xl font-semibold mt-3">Your Products:</div>
      
      <div className="bg-white">
        <ToastContainer />
        <div className="flex">
        <div className="mx-auto w-full px-4 py-16 sm:px-6 sm:py-24 lg:w-full lg:px-8 button-add">
        
          <h2 className="sr-only">Products</h2>
          
          <div className="mx-auto w-full px-4 py-16 sm:px-6 sm:py-24 lg:w-full lg:px-8 button-add">
            {posts.map((product:Product,i:number) => (
              <div key={i} onClick={()=>{route.push(`product/${product.id}`)}}>
              <a href="#" className="group" >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.image}
                    alt="no content"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="flex">
                    <div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                    </div>
                </div>
              </a>
              </div>))}
          </div>
        </div>
        </div>
      </div>
     </div>)
          }
            
        </div>
      </div>
    </div>
    </div>);
};

export default Profile;
