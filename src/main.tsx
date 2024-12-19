import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import {StyleSheetManager, WebTarget} from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyleSheetManager shouldForwardProp={(propName: string, elementToBeCreated: WebTarget) => {
      return typeof elementToBeCreated === 'string' ? isPropValid(propName) : true
    }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyleSheetManager>
  </StrictMode>
);
