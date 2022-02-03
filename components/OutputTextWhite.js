import { Form, Col } from "react-bootstrap";
import styles from "../styles/Contant.module.css";
import { useState } from "react";
const OutputTextWhite = (props) => {
  // console.log("output text.....");
  let value =
    (props.value === undefined) | (props.value === "") ? "N/A" : props.value;

  return (
    <>
      <Col xs={props.cols} className={styles.sheetcell}>
        <Form.Label htmlFor={props.name} className={styles.pagemainwhite}>
          {props.main}
          <p className={styles.pagevaluewhite}>
            {value}
            {props.unit}{" "}
          </p>
        </Form.Label>
      </Col>
    </>
  );
};

export default OutputTextWhite;
