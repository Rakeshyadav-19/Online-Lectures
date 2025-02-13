// We can use fragments to return more that one tag
// <>
// .....
// </>      
// It is a emty tag, called fragment.

import Footer from "./components/Footer";
import Header from "./components/Header";

// TO make reusable code we use components
const App = () => {
    return ( 
        <>
            {/* It is now a reusable header */}
            <Header/>

            <Footer />
            
        </>
     );
}
 
export default App;