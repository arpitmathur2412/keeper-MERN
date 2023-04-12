import Notes from "./Notes";
// import Alerts from "./Alert";

function Home(props){
return(
    <div>
        {/* <Alerts message="successfully created account" variant="success"/> */}
        <Notes showAlert={props.showAlert}/>
    </div>
 )} 

export default Home;