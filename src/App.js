import Content from "./components/content/Content";
import Header from "./components/header/Header";
import SiteBar from "./components/sidebar/SiteBar";

function App() {
  return (
    <>
    <Header/>
    <div className="area">
    <SiteBar/>
    <Content/>
    </div>
    </>
  )
}

export default App;
