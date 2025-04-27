import React from "react";
import { Col, Row } from "react-bootstrap";
import {toolData} from "../../components/database/SkillDb"

const Toolstack = () => {
  return <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  {
   toolData?.map((obj)=>{
 
    return  <>
    <Col xs={6} md={2} className="tech-icons">
      <div className="icon-data">{obj?.icon}</div>
      <div className="icon-label">{obj?.name}</div>
    </Col>
     {/* <Col xs={2} md={2} className="tech-icons">
     {obj?.name}
   </Col> */}
    </>
    
   })
  }
   </Row>
  
}

export default Toolstack;
