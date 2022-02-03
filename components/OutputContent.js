import { Form, Col } from "react-bootstrap";
import styles from "../styles/Contant.module.css";
import { useState } from "react";
const OutputContent = (props) => {
  // console.log("output text.....");
  let value1 =
    (props.value1 === undefined) | (props.value1 === "") ? "N/A" : props.value1;

  let value2 =
    (props.value2 === undefined) | (props.value2 === "") ? "N/A" : props.value2;

  return (
    <>
      <Col xs={props.cols} className={styles.sheetcell}>
        <Form.Label htmlFor={props.name} className={styles.pagemain}>
          <p className={styles.pagevaluewhite}>
            {value1}
            {props.unit1}
            {" / "}
            {value2}
            {props.unit2}
          </p>
        </Form.Label>
      </Col>
    </>
  );
};

export default OutputContent;
