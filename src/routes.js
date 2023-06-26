//package imports
import { Navigate, useRoutes } from "react-router-dom";

//module imports
import Landing from "./layout/layout";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import Contact from "./pages/contact/contact";
import Testimonials from "./pages/testimonials/testimonials";
import News from "./pages/news/news";
import NotFound from "./error/404";

//router function
const Router = () => {
	return useRoutes([
		{
			path: "/landing",
			element: <Landing/>,
			children: [
				{
					path: "/landing/home",
					element: <Home/>
				},
				{
					path: "/landing/about",
					element: <About/>
				},
				{
					path: "/landing/services",
					element: <Services/>
				},
				{
					path: "/landing/testimonials",
					element: <Testimonials/>
				},
				{
					path: "/landing/news",
					element: <News/>
				},
				{
					path: "/landing/contact",
					element: <Contact/>
				},
			]
		},
		{
			path: "/404",
			element: <NotFound/>
		},
		{
			path: "*",
			element: <Navigate to="/404" replace/>
		}
	])
}

export default Router