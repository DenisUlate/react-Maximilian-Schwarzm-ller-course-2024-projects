import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

/**
 * Counter component.
 * Renders a counter value from the Redux store and a button to toggle the counter.
 */
const Counter = () => {
	const dispatch = useDispatch();
	// Get the counter value from the Redux store
	const counter = useSelector((state) => state.counter.counter);
	const show = useSelector((state) => state.counter.showCounter);

	// Handler function for the increment button
	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	// Handler function for the increase button
	const increaseHandler = () => {
		dispatch(counterActions.increase(5));
	};

	// Handler function for the decrement button
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	// Handler function for the toggle counter button
	const toggleCounterHandler = () => {
		dispatch(counterActions.toggle());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increment by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
