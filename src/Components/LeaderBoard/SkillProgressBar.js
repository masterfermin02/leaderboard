import React from "react";
import { MDBProgress } from 'mdbreact';

const SkillProgressBar = (props) => {
    const {strength, endurance, dexterity, desitionMaking} = props;
  return (
    <>
    <div className="d-flex flex-row">
      <div className="p-2">STRENGTH</div>
      <div className="p-2">{strength}</div>
      <div className="p-2" style={{width:800}}><MDBProgress value={parseInt(strength)} className="my-2"  color="info" /></div>
    </div>
    <div className="d-flex flex-row">
      <div className="p-2">ENDURANCE</div>
      <div className="p-2">{endurance}</div>
      <div className="p-2" style={{width:800}}><MDBProgress value={parseInt(endurance)} className="my-2" color="warning" /></div>
    </div>
    <div className="d-flex flex-row">
      <div className="p-2">DEXTERITY</div>
      <div className="p-2">{dexterity}</div>
      <div className="p-2" style={{width:800}}><MDBProgress value={parseInt(dexterity)} className="my-2" color="success" /></div>
    </div>
    <div className="d-flex flex-row">
      <div className="p-2">DECISION MAKING</div>
      <div className="p-2">{desitionMaking}</div>
      <div className="p-2" style={{width:800}}><MDBProgress value={parseInt(desitionMaking)} className="my-2" color="puple" /></div>
    </div>
    </>
  );
}

export default SkillProgressBar;