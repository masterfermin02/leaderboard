import React from "react";
import { MDBProgress } from 'mdbreact';

const SkillProgressBar = (props) => {
    const {strength, endurance, dexterity, desitionMaking} = props;
  return (
    <>
      STRENGTH {strength} <MDBProgress value={strength} className="my-2"  color="info" />
      ENDURANCE {endurance} <MDBProgress value={endurance} className="my-2" color="warning" />
      DEXTERITY {dexterity} <MDBProgress value={dexterity} className="my-2" color="success" />
      DECISION MAKING {desitionMaking} <MDBProgress value={desitionMaking} className="my-2" color="puple" />
    </>
  );
}

export default SkillProgressBar;