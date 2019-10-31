import React from "react";
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import MainComponent from "./components/MainComponent.js";
import Todo from "./components/Todo";


// function App(){
//     return(
//         <div> 
//                 <Header />
//                 <MainComponent />
//                 <hr></hr>
//                 <hr></hr>
//                 <Todo />
            
//                 <Footer />
//         </div>
//     )

// }
class App extends React.Component{
    render(){
       return( <div> 
                <Header />
                <MainComponent />
                <hr></hr>
                <hr></hr>
                <Todo />
            
                <Footer />
        </div>
        );

    }
}
//states maintain their own set of data
//componentDidMount(){}=> Its a lifecycle function just like render function.It runs just once.usully used to mount data from APIs
//componentWillReceiveProps(nextProps){}=>lifecycle function.
/*
componentDidMount(){
    //Get the data i need to display correctly
}
componentWillReceiveProps(nextProps){//depricated
    if(nextProps.property!=this.prop.propert)
    {
        //DO  Something
    }
}
shouldComponentUpdate(nextProps,nextState)
{
    //return true if you want to update
    //return false otherwise
}

componentWillUnmount(){
    //e.g:remove event listener
    //usually used with componentDidMount
    //tear down or clean up code before your component disappers
}
 */
export default App;