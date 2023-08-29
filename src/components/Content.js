import React, { useState } from 'react'
import "./../App.css"


function Content(props) {
    console.log(props)
    // let Title = ["쌍둥이 아기판다", "쌍둥이 아기판다", "주토피아 동물 아카데미","귀엽게 찰칵!"]
    // let Desc = ["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터"] //값 다 넘겼기때문에 지워도됨
    let [good, setGood] = useState(0)
    let [title, setTitle]= useState(["쌍둥이 아기판다", "쌍둥이 아기판다", "주토피아 동물 아카데미" ,"귀엽게 찰칵!"])
    let [desc, setDesc] = useState(["스페셜 이벤트","이름을 지어주세요","판다는 곰이 맞을까?","에버랜드 AR필터"])


    function  goodFun(){
        // alert(1);
        setGood(good+1)
    }

    function Change(){
        let copy = [...title];
        let copy2 = [...desc];
        copy[0] = "쌍둥이 아기판다77"
        copy2[1] = "수정 완료"
        setTitle(copy) //클릭시 첫번째것 제목 바뀜
        setDesc(copy2)
    }

let[modalChk, setModalChk] = useState(false);
function Modal(){
    // alert(modalChk)
    // setModalChk(true) // 클릭했을때 true 값으로 변경
    // if(modalChk === false){
    //     setModalChk(true)
    // }else{
    //     setModalChk(false)
    // }
    // ( modalChk === false ?  setModalChk(true) : setModalChk(false)) //클릭했을때 꺼지고 켜지고함
    setModalChk(!modalChk)
} 

  return (
    <>
        <div className='content-item' onClick={Modal}>
            <img src="https://i.pinimg.com/564x/0b/2f/d4/0b2fd4801d03fde3a349ac1ffca4dc73.jpg" alt="테스트" />
            <h3>{title[props.arrayNum]}</h3> 
            <p>{desc[props.arrayNum]}</p>
            {/* <p>{props.desc2}</p> */}
            <p onClick={goodFun}>👍 {good}</p>
            <button onClick={Change}>수정</button>
        </div>
        {
        //    ( modalChk === true ?  <div className='window'></div> : null) //modalchk 가 트루일때만 window 가 나옴
        ( modalChk === true && <div className='window' onClick={Modal}></div> )
        }
    </>
  )
}

export default Content