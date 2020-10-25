import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './assets';
import ProductContainer from './container/productContainer';
import rootReducer from './redux/reducer/root-reducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
function App() {
  return (
    <Provider store={store}>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Route path='/'
            render={props => <ProductContainer {...props} />} 
          />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

