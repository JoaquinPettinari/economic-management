import { AppRouter } from "./routers/AppRouter"
import DrawerComponent from "./components/Drawer/Drawer";
import React from "react";

class App extends React.Component {
  state = {
    left: false
  };
  toggleDrawer = () => { 

    this.setState({ left: false });
  };




  render() {
  return (
    <div className="App">
   <AppRouter />
   <DrawerComponent
   left={this.state.left}
   toggleDrawerHandler={this.toggleDrawer}
 />
 </div>
    );
  }
}
export default App;