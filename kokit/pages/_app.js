import '../styles/globals.css'
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; // i18n 구성 파일 가져오기


export default function App({ Component, pageProps }) {
  return(
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );  
}