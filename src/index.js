import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './error/errorBoundary';

import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<HelmetProvider>
		<React.StrictMode>
			<BrowserRouter>
				<ThemeProvider>
					<Suspense fallback="Loading...">
						<ErrorBoundary>
							<App />
						</ErrorBoundary>
					</Suspense>
				</ThemeProvider>
			</BrowserRouter>
		</React.StrictMode>
	</HelmetProvider>
);

reportWebVitals();
