import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { EditorThemeProvider } from './components/theme-provider';
import { ChakraProvider } from '@chakra-ui/react';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <EditorThemeProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </EditorThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
