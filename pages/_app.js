import './css/styles.css';
import {ComponentPreviews, useInitial} from "../components/dev";
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import { AuthProvider } from '../context/AuthContext';
import { MessageProvider } from '../context/MessageContext';

// This default export is required in a new `pages/_app.js` file.
function MyApp({Component, pageProps}) {
    return <DevSupport ComponentPreviews={ComponentPreviews}
                       useInitialHook={useInitial}
    >
        <AuthProvider>
            <MessageProvider>
                <Component {...pageProps} />
            </MessageProvider>
        </AuthProvider>
    </DevSupport>
}

export default MyApp;