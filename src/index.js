import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import LoginProvider from "./context/LoginProvider"
import DataProvider from './context/DataProvider';
import UserDataProvider from './context/UserDataProvider';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';



ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <LoginProvider>
        <DataProvider>
          <UserDataProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
              <App />
            </MuiPickersUtilsProvider>
          </UserDataProvider>
        </DataProvider>
      </LoginProvider>

    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//comentario de prueba
