import React, { Component, useContext, useState } from "react";
import { MDBRow, MDBCol, MDBCollapse, MDBContainer, MDBCard, MDBCardHeader, MDBCardBody} from "mdbreact";
import AppContext from "../context/AppContext";
import SkillProgressBar from "./LeaderBoard/SkillProgressBar";

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
        const { name, photo, bib, age, gender, time, score, strength, endurance, dexterity, desitionMaking } = user;
        return (
          <MDBRow key={index}>
            <MDBCol size='12' style={{ paddingLeft: 0, paddingRight: 0, marginTop: 10}} >
              <MDBCard >
                <MDBCardHeader 
                style={{cursor: 'pointer', paddingTop: 0, paddingBottom: 0, height: 51, backgroundColor: 'white'}}
                className="collapse-header-background"
                onClick={toggleCollapse(`collapse-${index}`)}>
                <MDBRow>
                  <MDBCol size="7" >
                    <MDBRow>
                      <MDBCol size="1" className="margin-top-10 collapse-col" >{index + 1}</MDBCol>
                      <MDBCol size="2" className="collapse-col"  >
                        <img src={photo} style={{ height: '100%'}} alt="aligment" />
                      </MDBCol>
                      <MDBCol size="4"  className="margin-top-10 collapse-col font-weight-bold" > {name}</MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol size="1" className="margin-top-10 basic-info collapse-col"  >{bib}</MDBCol>
                  <MDBCol size="1" className="margin-top-10 basic-info collapse-col" > {age}</MDBCol>
                  <MDBCol size="1" className="margin-top-10 basic-info collapse-col" style={{ textAlign: "center" }} > {gender}</MDBCol>
                  <MDBCol size="1" className="collapse-col basic-info white-text collapse-background-time" > {time}</MDBCol>
                  <MDBCol size="1" className="collapse-col basic-info white-text collapse-background-score" > {score}</MDBCol>
                </MDBRow>
                </MDBCardHeader>
                <MDBCollapse id={`collapse-${index}`} isOpen={collapseID}>
                  <MDBCardBody>
                    <SkillProgressBar 
                    strength={strength}  
                    endurance={endurance} 
                    dexterity={dexterity} 
                    desitionMaking={desitionMaking}
                    />
                    Pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                    laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                    bird on it squid single-origin coffee nulla assumenda shoreditch
                    et. Nihil anim keffiyeh helvetica, craft beer labore wes
                    anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                    butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                    raw denim aesthetic synth nesciunt you probably haven&apos;t
                    heard of them accusamus labore sustainable VHS.
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
        <MDBContainer className="collapse-desktop" >
          <RenderCollapseItem />
        </MDBContainer>
      );
    }
  }

export default CollapsePage;