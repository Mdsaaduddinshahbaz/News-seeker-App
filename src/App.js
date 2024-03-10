import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import  About from "./components/About"
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const  App=()=>{
  const[progress,setProgress]=useState(0)
  const pageSize=5
  const apikey=process.env.REACT_APP_NEWS_API
  const [bg, setBg] = useState('dark')
    const [btntext,setBtnText]=useState("Light mode")
    const [txtcolor,setTxtColor]=useState('dark')
    const [NewsCC,setNewsCC]=useState('white')
    const [NewsCBg,setNewsCBg]=useState('black')
    const setBgColor = () => {
        if (bg === 'dark') {
            setBg('light')
            setTxtColor('light')
            setNewsCC('black')
            if(btntext==="Light mode"){
              setBtnText("Dark mode")
            }
            setNewsCBg('white')
        }
        else {
            setBg('dark')
            setTxtColor('dark')
            setNewsCC('white')
            setBtnText("Light mode")
            setNewsCBg('black')
        }
    }
  return ( 
      <Router>
      <div>
        <Navbar txtcolor={txtcolor}  bg={bg} btntext={btntext} setBgColor={setBgColor}/> 
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <Switch>
          <Route exact path="/about"><About/></Route>
          <Route exact path="/"><News NewsCC={NewsCC} NewsCBg={NewsCBg} bg={bg} setProgress={setProgress} apikey={apikey} pageSize={pageSize} key="general"  category="general"/></Route>        
          <Route exact path="/business"><News NewsCC={NewsCC} NewsCBg={NewsCBg} bg={bg} setProgress={setProgress} apikey={apikey} pageSize={pageSize} key="business" category="business"/></Route>
          <Route exact path="/entertainment"><News NewsCC={NewsCC} NewsCBg={NewsCBg} bg={bg} setProgress={setProgress} apikey={apikey} pageSize={pageSize} key="entertainment" category="entertainment"/></Route>
          <Route exact path="/health"><News NewsCC={NewsCC} NewsCBg={NewsCBg} bg={bg} setProgress={setProgress} apikey={apikey} pageSize={pageSize} key="health" category="health"/></Route>
          <Route exact path="/science"><News NewsCC={NewsCC} NewsCBg={NewsCBg} bg={bg} setProgress={setProgress} apikey={apikey} pageSize={pageSize} key="science" category="science"/></Route>
          <Route exact path="/sports"><News NewsCC={NewsCC} NewsCBg={NewsCBg} bg={bg} setProgress={setProgress} apikey={apikey} pageSize={pageSize} key="sports" category="sports"/></Route>
          <Route exact path="/technology"><News NewsCC={NewsCC} NewsCBg={NewsCBg} bg={bg} setProgress={setProgress} apikey={apikey}  pageSize={pageSize} key="technology" category="technology"/></Route>
          </Switch>
      </div>
      </Router>
    )
  
}
export default App
