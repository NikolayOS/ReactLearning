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
    <SiteBar friends={props.state.friendsList}/>
    <Routes>
    <Route path="profile" element = {<Profile posts={props.state.profilePage} dispatch={props.dispatch}/>}/>
    <Route path="messages" element = {<Dialogs dialogs={props.state.messagesPage}/>}/>
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
