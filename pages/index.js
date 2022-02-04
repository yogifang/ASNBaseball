import styles from '../styles/Contant.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Button, Grid, Form, Nav, Row, Col, Container, Spinner, ButtonGroup } from 'react-bootstrap';
import { useState, useEffect, useReducer, useContext } from 'react';
import { Context } from '../components/stores';


export default function Home() {
  const [login, setLogin] = useState(false);
  const [typeLogin, setTypeLogin] = useState('');
  const { member, setMember } = useContext(Context);
  const handleCreate = () => {
    setLogin(true);
    setTypeLogin('create');
  };

  const handleLogin = () => {
    setLogin(true);
    setTypeLogin('login');
  };

  const handleGoogleLogin = () => {
    setLogin(true);
    setTypeLogin('google');
  };

  const switchRender = () => {
    console.log(typeLogin);
    switch (typeLogin) {
      case 'login':
        console.log('switch....login....');

        break;
      case 'create':

        break;
      case 'google':
        break;
      default:
        break;
    }
  };
  return (
    <Container className={styles.container}>


    </Container>
  );
}
