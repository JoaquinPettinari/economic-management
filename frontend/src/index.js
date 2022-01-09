import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { CircularProgress, ThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme'
import { store } from './configureStore'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Suspense fallback={<CircularProgress />} >
            <App />
          </Suspense>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
