import './css/pfap.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/context/AuthContext';
import { MessageProvider } from '@/context/MessageContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <MessageProvider>
        <Component {...pageProps} />
      </MessageProvider>
    </AuthProvider>
  );
}

