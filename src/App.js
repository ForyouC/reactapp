import React from 'react';
//import logo from './logo.svg';
import Customer from "./component";
import './App.css';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/11',
  'name': '허재원',
  'birthday': '980223',
  'gender': '남자',
  'job': '프로그래머' 
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '제신희',
  'birthday': '990223',
  'gender': '여자',
  'job': '디자이너' 
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '하상헌',
  'birthday': '970223',
  'gender': '남자',
  'job': '대학생' 
}
]

function App() {
  return (
    <>
      {
        customers.map(c => {
          return <Customer key={c.id} id={c.id} img={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
          />
        })
      }
    </>
  );
}

export default App;
