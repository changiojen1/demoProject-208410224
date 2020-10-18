import React ,{Component}from "react"
import "./App.css"
import DemoList from "../component/DemoList_24"
import {demos} from "../demos"
import '../myCss.css'
import SearchBox from '../component/SearchBox.js'
import Scroll from '../component/Scroll'

class App extends Component{
  constructor(){
    super();
    this.state={
      demos:demos,
      searchField:'',
    }
  }

  onSearchChange = event => {
    this.setState({searchField : event.target.value});
  }
  

  render(){
    const filteredDemos = this.state.demos.filter(f => {
      return f.pname.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1 className='white title'>DEMO PROJECT</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <DemoList demos={filteredDemos}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
