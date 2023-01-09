/*eslint-disable*/

import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, b] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );
  let [logo,setLogo] = useState('ReactBlog')
  let [따봉,따봉변경] = useState([1,2,3])
  let [modal,setModal] = useState(false)

  var 어레이 = [2,3,4];
어레이.map(function(a){
  return '12321'
});

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
        <h4 onClick={()=> {setModal(true)}}>{글제목[i]}<span onClick={()=>{
          let like =[...따봉]
          like[i]=like[i]+1
          따봉변경(like)
        }}>👍</span> {따봉[i]}  </h4>
        <p>2월 17일 발행</p>
      </div>
        )
      })
    }

      
      {
        modal == true ? <Modal btn={btn}  글제목={글제목}/> : null
      }

    </div>
  );
}

function Modal(props){
 return(
  <div className="modal">
  <h4>{props.글제목[0]}</h4>
  <p>날짜</p>
  <p>상세내용</p>
  <button onClick={props.btn}>글수정</button>
</div>
 )
}

export default App;
