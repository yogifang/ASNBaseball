import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import fetch from "isomorphic-unfetch";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/router";
import { Context } from "../components/stores";
import styles from "../styles/Contant.module.css";
import Moment from "react-moment";
import OutputText from "../components/OutputText";
import OutputDate from "../components/OutputDate";
import OutputMonth from "../components/OutputMonth";
import FileBase64 from "react-file-base64";
import OutputTextBig from "../components/OutputTextBig";
import OutputContent from "../components/OutputContent";
import Nobody from "../components/nobody";

const initialBaseinfos = {
  ChineseName: "",
  PassportName: "",
  Gender: "",
  GradDate: Date.now(),
  Height: 0.0,
  LeftRightHand: "",
  PriPosition: "",
  SecPosition: "",
  Weight: 0.0,
  bFilled: false,
  currentGrad: "",
};

const initialContacts = {
  email: "",
  birthday: Date.now(),
  school: "",
  liveCity: "",
  Nationality: "",
  links: "",
  member: "",
  bFilled: false,
};

const initialSubjects = {
  member: "",
  GPA: 0,
  AVG: 0,
  TOFEL: 0,
  IELTS: 0,
  TOEIC: 0,
  SAT: 0,
  ACT: 0,
  IntentMajor: "",
  bFilled: false,
};

const initialBaseballPerformance = {
  member: "",
  TenYardSplit: 0,
  SixtyYardSplit: 0,
  Throwing: 0,
  BlockPitch: 0,
  ERA: 0,
  gamesP: 0,
  AVG: 0,
  ER: 0,
  EXIT: 0,
  HB: 0,
  HR: 0,
  IP: 0,
  K: 0,
  OPS: 0,
  gamesH: 0,
  BB: 0,
  BBB: 0,
  BH: 0,
  BHR: 0,
  BK: 0,
  BRUN: 0,
  RUN: 0,
  Hit2B: 0,
  Hit3B: 0,
  Hits: 0,
  lAVG: 0,
  lBB: 0,
  lBBB: 0,
  lBH: 0,
  lBHR: 0,
  lBK: 0,
  lBRUN: 0,
  lER: 0,
  lERA: 0,
  lHB: 0,
  lHit2B: 0,
  lHit3B: 0,
  lHitHR: 0,
  lHits: 0,
  lIP: 0,
  lK: 0,
  lOPS: 0,
  lRUN: 0,
  AB: 0,
  latestGameDate: Date.now(),
  latestGameName: "",
  bFilled: false,
};

const BaseballPage = () => {
  // const { member, setMember } = useContext(Context);
  const [values, setValues] = useState(initialBaseinfos);
  const [valContact, setValContact] = useState(initialContacts);
  const [valSubjects, setValSubjects] = useState(initialSubjects);
  const [valPerformance, setValPerformance] = useState(initialBaseballPerformance);
  const [picture, setPicture] = useState({
    _id: "",
    member: "",
    image: Nobody,
  });
  const [photo, setPhoto] = useState({ image: Nobody });
  const { query } = useRouter();
  console.log(3388, query);
  const member = query.member;

  useEffect(() => {
    const getBaseballInfo = async () => {
      try {
        const url = process.env.HOST_URI + `api/baseballInfo/${member}`;
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const record = await res.json();
        // console.log(record.data);
        let field;
        let nValues = {};
        for (field in initialBaseinfos) {
          nValues[field] = record.data[field];
        }
        setValues(nValues);
      } catch (error) {
        console.log(error);
      }
    };

    const getContacts = async () => {
      try {
        const url = process.env.HOST_URI + `api/contacts/${member}`;
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const record = await res.json();
        // console.log(record.data);
        let field;
        let nValues = {};
        for (field in initialContacts) {
          nValues[field] = record.data[field];
        }
        setValContact(nValues);
      } catch (error) {
        console.log(error);
      }
    };

    const getSubjects = async () => {
      try {
        const url = process.env.HOST_URI + `api/subjects/${member}`;
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const record = await res.json();
        // console.log(record.data);
        let field;
        let nValues = {};
        for (field in initialSubjects) {
          nValues[field] = record.data[field];
        }
        setValSubjects(nValues);
      } catch (error) {
        console.log(error);
      }
    };

    const getPerformance = async () => {
      try {
        const url = process.env.HOST_URI + `api/baseballPerformance/${member}`;
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const record = await res.json();
        // console.log(record.data);
        let field;
        let nValues = {};
        for (field in initialBaseballPerformance) {
          nValues[field] = record.data[field];
        }
        setValPerformance(nValues);
      } catch (error) {
        console.log(error);
      }
    };

    const getPhoto = async () => {
      const url = process.env.HOST_URI + `api/photos/${member}`;
      const queryParams = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const [res] = await Promise.all([fetch(url, queryParams)]);
      const [record] = await Promise.all([res.json()]);
      if (record.success) {
        setPicture(record.data);
        if (record.data.image !== undefined) {
          //console.log(record.data.image);
          setPhoto({ image: record.data.image });
        }
      } else {
        //   console.log('-------no data');
      }
    };

    if (member !== undefined) {
      getBaseballInfo();
      getContacts();
      getSubjects();
      getPerformance();
      getPhoto();
    }
  }, [member]);


  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const newpicture = {
      _id: picture._id,
      member: member,
      image: photo.image,
    };

    setPicture(newpicture);

    if (newpicture._id === "") {
      try {
        const url = process.env.HOST_URI + `api/photos/`;
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newpicture),
        });
        alert("Data is Saved!!");
      } catch (error) {
        console.log(error);
      }
    } else {
      const member = newpicture.member;
      const url = process.env.HOST_URI + `api/photos/${member}`;
      const result = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newpicture),
      });
      const data = await result.json();
      //  console.log(data);
      alert("Data is Updated!!");
    }
  };

  const feetHeight = (cm) => {
    if (cm !== undefined && cm !== null && cm !== 0) {
      const feet = Math.floor(cm.height / 30.48);
      const inches = ((cm - feet * 30.48) / 2.54).toFixed(0);
      return feet.toString() + "'" + inches.toString() + '"';
    } else {
      return "0";
    }

  };

  return (
    <Container className={styles.container}>
      <div className={styles.contant}>
        <div className={styles.sheettable} >
          <Row className={styles.sheettable}>
            <Col xs={1}></Col>
            <Col xs={3}>
              <Image placeholder="empty" src={photo.image} alt="Picture of the author" width={"320rem"} height={"320rem"} />
            </Col>
            <Col xs={7}>
              <OutputTextBig cols="12" name="PassportName" main="" value={values.PassportName} />
              <OutputText cols="12" name="Gender" main="" value={values.Gender} />
              <OutputDate cols="12" name="Birthday" main="" value={valContact.birthday} />
              <OutputContent cols="6" name="Hight" main="" value1={feetHeight(values.Height)} value2={(values.Weight / 0.454).toFixed(1)} unit1="" unit2="lb" />
            </Col>
          </Row>
          <br /><br />
          <Row className={styles.sheettable}>
            <Col xs={1}></Col>
            <Col xs={1}>
              <OutputText cols="12" name="LeftRightHand" main="B/T" value={values.LeftRightHand} />
            </Col>
            <Col xs={2}>
              <OutputText cols="12" name="PriPosition" main="Position" value={values.PriPosition} />
            </Col>
            <Col xs={4}>
              <OutputText cols="12" name="SecPosition" main="Other Position" value={values.SecPosition} />
            </Col>
            <Col xs={4}>
              <OutputText cols="12" name="Throwing" main="Throwing Velocity" value={valPerformance.Throwing} />
            </Col>
          </Row>
          <br /><br />
          <Row className={styles.sheettable}>
            <Col xs={1}></Col>
            <Col xs={1}><OutputText cols="12" name="ERA" main="ERA" value={valPerformance.ERA} /></Col>
            <Col xs={1}><OutputText cols="12" name="gamesP" main="G" value={valPerformance.gamesP} /></Col>
            <Col xs={1}><OutputText cols="12" name="IP" main="IP" value={valPerformance.IP} /></Col>
            <Col xs={1}><OutputText cols="12" name="BH" main="H" value={valPerformance.BH} /></Col>
            <Col xs={1}><OutputText cols="12" name="BRUN" main="R" value={valPerformance.BRUN} /></Col>

            <Col xs={1}><OutputText cols="12" name="ER" main="ER" value={valPerformance.ER} /></Col>
            <Col xs={1}><OutputText cols="12" name="BHR" main="HR" value={valPerformance.BHR} /></Col>
            <Col xs={1}><OutputText cols="12" name="HB" main="HB" value={valPerformance.HB} /></Col>
            <Col xs={1}><OutputText cols="12" name="BB" main="BB" value={valPerformance.BB} /></Col>
            <Col xs={1}> <OutputText cols="12" name="K" main="K" value={valPerformance.K} /></Col>
            <Col xs={1}></Col>
          </Row>
          <br /><br />
          <Row className={styles.sheettable}>
            <Col xs={1}></Col>
            <Col xs={3}><OutputText cols="12" name="EXIT" main="Exit Velocity" value={valPerformance.EXIT} /></Col>
            <Col xs={4}><OutputText cols="12" name="SixtyYardSplit" main="60 yard sprint(s)" value={valPerformance.SixtyYardSplit} /></Col>
            <Col xs={4}><OutputText cols="12" name="TenYardSplit" main="10 yard sprint(s)" value={valPerformance.TenYardSplit} /></Col>
          </Row>
          <br /><br />
          <Row className={styles.sheettable}>
            <Col xs={1}></Col>
            <Col xs={1}><OutputText cols="12" name="gamesH" main="G" value={valPerformance.gamesH} /></Col>
            <Col xs={1}><OutputText cols="12" name="AB" main="AB" value={valPerformance.AB} /></Col>
            <Col xs={1}><OutputText cols="12" name="AVG" main="AVG" value={valPerformance.AVG} /></Col>
            <Col xs={1}><OutputText cols="12" name="OPS" main="OPS" value={valPerformance.OPS} /></Col>
            <Col xs={1}> <OutputText cols="12" name="RUN" main="R" value={valPerformance.RUN} /></Col>
            <Col xs={1}><OutputText cols="12" name="Hits" main="H" value={valPerformance.Hits} /></Col>
            <Col xs={1}><OutputText cols="12" name="Hit2B" main="2B" value={valPerformance.Hit2B} /></Col>
            <Col xs={1}><OutputText cols="12" name="Hit3B" main="3B" value={valPerformance.Hit3B} /></Col>
            <Col xs={1}><OutputText cols="12" name="HR" main="HR" value={valPerformance.HR} /></Col>
            <Col xs={1}><OutputText cols="12" name="BK" main="K" value={valPerformance.BK} /></Col>
            <Col xs={1}><OutputText cols="12" name="BBB" main="BB" value={valPerformance.BBB} /></Col>
            <Col xs={1}></Col>
            <Col xs={1}></Col>
          </Row>
          <br /><br />

        </div>
      </div>
    </Container >
  );
};

export default BaseballPage;
