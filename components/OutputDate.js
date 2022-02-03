import { Form, Col } from "react-bootstrap";
import styles from "../styles/Contant.module.css";
import Moment from "react-moment";

const OutputDate = (props) => {
  return (
    <>
      <Col lg={props.cols} className={styles.sheetcell}>
        <Form.Label htmlFor={props.name} className={styles.pagemain}>
          {props.main}
          <p className={styles.pagevalue}>
            <Moment format="YYYY/MM/DD">{props.value}</Moment>
          </p>
        </Form.Label>
      </Col>
    </>
  );
};

export default OutputDate;
