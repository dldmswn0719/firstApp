import React from 'react'
import { styled } from 'styled-components'

const Style = styled.div`
    background-color : skyblue;
    font-size : 3rem;

` //맨뒤는 백틱/style 내용을 가져오고 내가 사용할내용은 div 다

const StyleUl = styled.ul`
    max-width:1200px;
    margin : 0 auto;
    display: flex;
    justify-content: space-between;
`


function Styled() {
    let Menu = ["메뉴1","메뉴2","메뉴3","메뉴4","메뉴5"]
    return (
      <Style>
          <StyleUl>
              {
                Menu.map((el,i)=>{
                    // console.log(el) // 콘솔창에 메뉴1,2,3,4,5뜬다
                    return(
                     <li className='text-center' key={i}>{el}</li> //반복문 돌아간다 / 클래스이름 알아서 정해줌
                    )
                })
              }
          </StyleUl>
      </Style>
  )
}

export default Styled