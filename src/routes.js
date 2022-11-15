//package imports
import { Navigate, useRoutes } from "react-router-dom";

//module imports
import Homepage from "./pages/home";
import About from "./pages/about";

//router function
const Router = () => {
	return useRoutes([
		{
			path: "/home",
			element: <Homepage/>
		},
		{
			path: "/about",
			element: <About/>
		},
		{
			path: "*",
			element: <Navigate to="/404" replace/>
		}
	])
}

export default Router