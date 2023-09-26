import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
	const { isAuthenticated } = useAuth();
	console.log("==>", isAuthenticated);
	const naviagte = useNavigate();

	useEffect(
		function () {
			if (!isAuthenticated) naviagte("/");
		},
		[isAuthenticated, naviagte]
	);
	console.log("====>", isAuthenticated);
	return isAuthenticated ? children : null;
}

export default ProtectedRoute;
