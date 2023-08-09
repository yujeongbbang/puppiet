import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import picSrc from '../img/PUPPIET_logo.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../login.css';
import '../input.css';

import iconImage from '../icon/name.png'
import pwImage from '../icon/password.png'

// firebase login 정보 -- 정희석
import {auth} from "../firebase"


const Login = () => {
  // 로그인
  const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

      // 로그인 기능 함수
  const handleLogin = (e) => {
    e.preventDefault();

    // firebase 영상 추가 작업 내용
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
     })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
     });
  }
}
  // 로그인 기능 함수
  const handleLogin = (e) => {
    e.preventDefault();

    // firebase 영상 추가 작업 내용
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
     })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
     });
  //--------------------------------------------------------------------------------------------------- 정희석 끝
    console.log('handle Login Function', idRef.current.value, pwRef.current.value);
    if (idRef.current.value === 'puppiet' && pwRef.current.value === '1234') {
      sessionStorage.setItem('userId', idRef.current.value); // sessionStorage에 로그인 데이터 저장
      nav('/main2');

    } else {
      alert('로그인 실패 - 아이디 또는 비밀번호를 올바르게 입력해 주세요.')
      idRef.current.value = '';
      pwRef.current.value = '';
      idRef.current.focus();
    }
  };

  return (
    <div>
      <br />

      <Link to='/'>
        <img
          className='logo'
          style={{
            display: 'block',
            margin: '0 auto',
            width: '200px',
          }}
          src={picSrc}
          alt='PUPPIET Logo'
        />
      </Link>


      <div style={{ ...box1, marginTop: '40px' }}>
        {/*  */}
        <div style={{ margin: '30px', marginTop: '70px' }}>


          <Form onSubmit={handleLogin}>
            {/* 아이디 입력란 */}

            <Form.Group className="mb-3" controlId="formBasicID">
              <Form.Label></Form.Label>
              <div className="d-flex align-items-center">
                <img src={iconImage} style={{ width: '20px', marginRight: '10px' }} alt="Icon" />
                <Form.Control type="text" placeholder="아이디" ref={idRef} className="custom-input" /> </div>


            </Form.Group>
            {/* 비밀번호 입력란 */}
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label></Form.Label>
              <div className="d-flex align-items-center">
                <img src={pwImage} style={{ width: '20px', marginRight: '10px' }} alt="Icon" />
                <Form.Control type='password' placeholder='비밀번호' ref={pwRef} className="custom-input" /> </div>
            </Form.Group>

            {/* 로그인 버튼 */}

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
              <Button variant='primary' type='submit' style={{
                backgroundColor: '#FFC9C9', borderColor: '#FFC9C9', color: 'gray',
                width: '300px', height: '60px'
              }}>
                로그인
              </Button>

            </div>


          </Form>

          <br />

          <div className='logintext' style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to='/signup' className='txt'>
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;