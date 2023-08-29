// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Content from './components/Content';
import Nav from './components/Nav';
import About from './pages/About';
import Main from './pages/Main';
import Portfolio from './pages/Portfolio';
import NotPage from './pages/NotPage';
// import Styled from './Styled';





function App() {
  

  // let Name = "이은주"; //변수 설정
  //변수 사용은 중괄호문법(react에서 변수값가져옴), 달러가 빠진다
  // let [Name,b] = useState("이은주"); //앞쪽 값("이은주")이 들어감, b = 변경할수있는 함수



  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/*" element={<NotPage />}/>
      </Routes>
    </>



    //   <div className="App">
    //    <Nav />
    //    <h3 className={Name} style={{color: "orange", backgroundColor : "skyblue"}}>Hello React {Name}</h3>
    //    <div className='content'>
    //      <Content arrayNum = "0"/>
    //      <Content arrayNum = "1"/>
    //      <Content arrayNum = "2"/>
    //      <Content arrayNum = "3"/>
    //    </div>
    //    <div className='content'>
    //      <Content title="쌍둥이 아기판다1" desc="스페셜 이벤트1" />
    //      <Content title="쌍둥이 아기판다2" desc="스페셜 이벤트2" />
    //      <Content title="쌍둥이 아기판다3" desc="스페셜 이벤트3" />
    //      <Content title="쌍둥이 아기판다4" desc="스페셜 이벤트4" />
    //    </div>
    //    <Styled />
    //  </div> 
  );
}

export default App;
