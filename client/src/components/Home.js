import Navigationbar from "./Navbar";
import Notes from "./Notes";

function Home(){
return(
    <div>
        <Navigationbar/>
        <div>
            <h3>Welcome to QuickNotes!</h3>
        </div>
        <Notes/>
    </div>
 )} 

export default Home;