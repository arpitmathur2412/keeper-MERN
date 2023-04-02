import Navigationbar from "./Navbar";
import Notes from "./Notes";
// import Alerts from "./Alert";

function Home(){
return(
    <div>
        <Navigationbar/>
        {/* <Alerts/> */}
        <div>
            <h3>Welcome to QuickNotes!</h3>
        </div>
        <Notes/>
    </div>
 )} 

export default Home;