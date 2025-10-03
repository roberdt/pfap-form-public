import './css/styles.css';
import {ComponentPreviews, useInitial} from "../components/dev";
import {DevSupport} from "@react-buddy/ide-toolbox-next";

// This default export is required in a new `pages/_app.js` file.
function MyApp({Component, pageProps}) {
    return <DevSupport ComponentPreviews={ComponentPreviews}
                       useInitialHook={useInitial}
    >
        <Component {...pageProps} />
    </DevSupport>
}

export default MyApp;