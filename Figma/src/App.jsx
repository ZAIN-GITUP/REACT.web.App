import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginform from "./pages/loginpage";
import { NavbarDefault } from "./Componenets/Navbar";
import LoginSuccess from "./Componenets/Example";
import Signupform from "./pages/signinpage";
import EmailForm from "./pages/EmailForm";
import OTPForm from "./pages/OTPpage";
import ResetPasswordForms  from "./pages/ResetPasswordForm"
import PostPageFigma from "./Figma/Figma";
import CombinedDetailPage from "./Figma/Figmapostdetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <><Loginform /></>,
    
  },
  {
    path: "/signin",
    element: <Signupform />,
  },
  {
    path: "/login",
    element: <Loginform />,
    
  },
  {
    path: "/forgotpassword",
    element: <EmailForm />,
    
  },
  {
  path: "/resetpassword",
  element: <ResetPasswordForms/>,
  
},
{
  path: "/otpcode",
  element: <OTPForm/>,
  
},
{
  path: "/posts/:postId",
  element: (
    <>
  
      <CombinedDetailPage/>
    </>
  ),
},
{
  path: "/figma",
  element: <PostPageFigma/>
  
},
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      {<NavbarDefault/>}
    </RouterProvider>
  );
};

export default App;
