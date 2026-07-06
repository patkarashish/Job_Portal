import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/JobListing";
import JobPage from "./pages/JobPage";
import PostJob from "./pages/PostJob";
import SaveJobs from "./pages/SaveJobs";
import MyJobs from "./pages/MyJobs";
import { ThemeProvider } from "./components/ThemeProvider";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: <Onboarding />
      },
      {
        path: '/jobs',
        element: <JobListing />
      },
      {
        path: '/job/:id',

        element: <JobPage />
      },
      {
        path: '/post-job',
        element: <PostJob />
      },
      {
        path: '/saved-job',
        element: <SaveJobs />
      },
      {
        path: '/my-job',
        element: <MyJobs />
      },
    ]
  }
])



const App = () => {

  return (
    <div >
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />;
      </ThemeProvider>
    </div>
  )
}

export default App