import React from 'react';
//import logo from './logo.svg';
import Customer from "./component";
import './App.css';
//import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableHead from '@material-ui/core/TableHead';
// import TableBody from '@material-ui/core/TableBody';
// import TableRow from '@material-ui/core/Tablerow';
// import TableCell from '@material-ui/core/TableCell';
// import { withStyles } from '@material-ui/core/styles';

// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     overflowx: "auto"
//   },
//   table: {
//     minWidth: 1080
//   }
// })

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

class App extends React.Component {
  render(){
    return (
      <>
        {/* <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody> */}
            {
              customers.map(c => {
                return <Customer key={c.id} id={c.id} img={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
                />
              })
            }
          {/* </TableBody>
        </Table> */}
      </>
    );
  }
}

export default App;
