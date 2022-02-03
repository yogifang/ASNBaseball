import { Form, Col } from "react-bootstrap";
import styles from "../styles/Contant.module.css";
import { useState } from "react";
const OutputTextBig = (props) => {
  // console.log("output text.....");
  let value =
    (props.value === undefined) | (props.value === "") ? "N/A" : props.value;

  return (
    <>
      <Col lg={props.cols} className={styles.sheetcell}>
        <Form.Label htmlFor={props.name} className={styles.pagemain}>
          {props.main}
          <p className={styles.pagevaluebig}>
            {value}
            {props.unit}{" "}
          </p>
        </Form.Label>
      </Col>
    </>
  );
};

export default OutputTextBig;
