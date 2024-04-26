import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Header = () => {
	const dispatch = useDispatch();

	// Logout handler function
	const logoutHandler = () => {
		dispatch(authActions.logout()); // Dispatches the logout action
	};

	// Selects the isAuthenticated state from the auth slice of the Redux store
	const isAuth = useSelector((state) => state.auth.isAuthenticated);

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			{isAuth && (
				<nav>
					<ul>
						<li>
							<a href="/">My Products</a>
						</li>
						<li>
							<a href="/">My Sales</a>
						</li>
						<li>
							<button onClick={logoutHandler}>Logout</button>{" "}
							{/* Logout button */}
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;
