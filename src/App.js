import Profile from "./components/content/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import SiteBar from "./components/sidebar/SiteBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
    <>
    <Header/>
    <div className="area">
    <SiteBar/>
    <Routes>
    <Route path="profile" element = {<Profile posts={props.state.posts}/>}/>
    <Route path="messages" element = {<Dialogs dialogs={props.state.dialogs} messages={props.state.messages}/>}/>
    <Route path="news" element = {<News/>}/>
    <Route path="music" element = {<Music/>}/>
    <Route path="settings" element = {<Settings/>}/>
    </Routes>
    </div>
    </>
    </BrowserRouter>
  )
}

export default App;
