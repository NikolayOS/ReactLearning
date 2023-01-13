import Profile from "./components/content/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import Header from "./components/header/Header";
import SiteBar from "./components/sidebar/SiteBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

function App() {
  return (
    <BrowserRouter>
    <>
    <Header/>
    <div className="area">
    <SiteBar/>
    <Routes>
    <Route path="profile" element = {<Profile/>}/>
    <Route path="messages" element = {<Dialogs/>}/>
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
