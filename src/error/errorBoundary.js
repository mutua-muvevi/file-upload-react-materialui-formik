// ErrorBoundary.js
import React, { Component } from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		if (process.env.NODE_ENV === "development") {
			console.error("Error:", error);
			console.error("Error info:", errorInfo);
		}
		// You can log the errors to an error reporting service here
	}

	render() {
		if (this.state.hasError) {
			return process.env.NODE_ENV === "production" ? (
				<h1>Something went wrong. Please try again later.</h1>
			) : (
				<h1>An error occurred. Check the console for details.</h1>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
