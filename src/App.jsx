import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import NewBlog from "./pages/NewBlog";
import BlogDetails, { blogDetails } from "./pages/BlogDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/create" element={<NewBlog />} />
        <Route path="/:id" element={<BlogDetails />} loader={blogDetails} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
