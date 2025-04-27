import React from "react";
import { Col, Row } from "react-bootstrap";
import {skillData} from "../../components/database/SkillDb"

const Techstack = () => {
  
   return <Row style={{alignItems: "center", justifyContent: "center", paddingBottom: "50px" }}>
    {
     skillData?.map((obj)=>{
   
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

export default Techstack;
