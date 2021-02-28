import React, { Component, useContext, useState } from "react";
import { MDBRow, MDBCol, MDBCollapse, MDBContainer, MDBCard, MDBCardBody, MDBBadge, MDBCardHeader} from "mdbreact";
import AppContext from "../context/AppContext";
import SkillProgressBar from "./LeaderBoard/SkillProgressBar";
import Event from "./LeaderBoard/Event";

const RenderCollapseItem = () => {
    const {users, isLoading } = useContext(AppContext);
    const [collapseID, setCollapseID] = useState("");
  
  const toggleCollapse = collapseID => () => {
    setCollapseID(prevState => prevState !== collapseID ? collapseID : "");
  };
  
    return (
      <>
      {!isLoading ? (
        users.map((user, index) => {
          const { 
            name, 
            photo, 
            bib, 
            age, 
            gender, 
            time, 
            score, 
            strength, 
            endurance, 
            dexterity, 
            skills,
            desitionMaking } = user;
          return (
            <MDBRow key={index}>
              <MDBCol size='12' style={{ paddingLeft: 0, paddingRight: 0, marginTop: 10}} >
              <MDBCard >
                <div className="card-header p-0 z-depth-1" role="tab" id="heading30">
                    <MDBCardHeader onClick={toggleCollapse(`collapse-${index}`)} className="black-text" >
                      <div className="mobile-collapse-header">
                        <div className="p-2">
                        <span style={{ marginLeft: 10, marginRight: 10 }} className="text-uppercase mb-0 py-3 mt-1">
                              {index + 1}
                          </span>
                        </div>
                        <div className="p-2">
                        <img src={photo} style={{ width: 50}} alt="aligment" />
                          <span style={{ marginLeft: 30}}>
                              {name}
                          </span>
                        </div>
                        <div className="p-2 ">
                          <span className="mobileScore">
                            <MDBBadge tag="a" color="default">BIB: {bib}</MDBBadge>
                                <MDBBadge style={{marginLeft: 10}}>SCORE: {score}</MDBBadge>
                            </span>
                        </div>
                      </div>
                    </MDBCardHeader>
                </div>
                <MDBCollapse id={`collapse-${index}`} isOpen={collapseID}>
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <div className="p-2">
                        <MDBBadge tag="a" color="default">AGE: {age}</MDBBadge>
                      </div>
                      <div className="p-2">
                        <MDBBadge tag="a" color="default">GENDER: {gender}</MDBBadge>
                      </div>
                      <div className="p-2">
                        <MDBBadge tag="a" color="default"> TIME: {time}</MDBBadge>
                      </div>
                    </div>
                  <SkillProgressBar 
                    strength={strength}  
                    endurance={endurance} 
                    dexterity={dexterity} 
                    desitionMaking={desitionMaking}
                    />
                    {(skills.map((skill, index) => {
                      return <Event key={index} value={skill} number={index} />
                    }))}
                  </MDBCardBody>
                </MDBCollapse>
              </MDBCard>
            </MDBCol>
            </MDBRow>
          );
        })
      // If there is a delay in data, let's let the user know it's loading
      ) : (
        <h3>Loading...</h3>
      )}
      </>
    )
  };

class CollapsePage extends Component {
  
  render() {

    return (
        <MDBContainer className="collapse-mobile" >
            <RenderCollapseItem />
        </MDBContainer>
      );
    }
  }

export default CollapsePage;