/*eslint-disable*/

import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, b] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
  let [logo,setLogo] = useState('ReactBlog')
  let [따봉,따봉변경] = useState([1,2,3])
  let [modal,setModal] = useState([false])
  let [origin,yht] = useState(0)
  let [입력값,입력값변경] = useState('')



function btn(){
  let change = [...글제목]
  change[0] = '여자 코트추천'
  b(change)
  console.log(b(change));
}

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>

      
    {
      글제목.map(function(a,i){
        return (
          <div className="list" key={i}>
        <h4 onClick={()=> {setModal(true); yht(i);console.log(yht)}}>{글제목[i]}<span onClick={(e)=>{
          let like =[...따봉]
          like[i]=like[i]+1
          따봉변경(like);
          e.stopPropagation();
        }}>👍</span> {따봉[i]}  </h4>
        <p>2월 17일 발행</p>
          <button onClick={()=>{
          let remove = [...글제목]
          remove.splice(i, 1);
          b(remove)
        }}>삭제</button>
      </div>
        )
      })
    }
  <input onChange={(e)=>{
    입력값변경(e.target.value); 
    
  }} type="text"/>
      <button onClick={()=>{
        let newWrite =[...글제목]
        newWrite.unshift(입력값)
        b(newWrite)
      }}>발행</button>
      {
        modal == true ? <Modal btn={btn} yht={yht}  setModal={setModal} origin={origin} 글제목={글제목}/> : null
      }
   

    </div>
  );
}

function Modal(props){
 return(

  <div className="modal">
  <h4>{props.글제목[props.origin]}</h4>
  <p>날짜</p>
  <p>상세내용</p>
  <button onClick={props.btn}>글수정</button>
</div>

 )
}

export default App;
