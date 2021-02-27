import React, { Component, useContext, useState } from "react";
import { MDBRow, MDBCol, MDBCollapse, MDBContainer, MDBCard, MDBCardBody} from "mdbreact";
import AppContext from "../context/AppContext";

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
          const { name, photo, bib, age, gender, time, score, strength } = user;
          return (
            <MDBRow key={index}>
              <MDBCol size='12' style={{ paddingLeft: 0, paddingRight: 0, marginTop: 10}} >
              <MDBCard >
                <div className="card-header p-0 z-depth-1" role="tab" id="heading30">
                    <a onClick={toggleCollapse(`collapse-${index}`)} href="#collapse30" className="black-text" >
                        <span style={{ marginLeft: 10, marginRight: 10 }} className="text-uppercase mb-0 py-3 mt-1">
                            {index + 1}
                        </span>
                        <img src={photo} style={{ width: 50}} alt="aligment" />
                        <span style={{ marginLeft: 30}}>
                            {name}
                        </span>
                        <span style={{ marginLeft: 30}}>
                            Score: {score}
                        </span>
                    </a>
                </div>
                <MDBCollapse id={`collapse-${index}`} isOpen={collapseID}>
                  <MDBCardBody>
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
        <MDBContainer className="collapse-mobile" >
            <RenderCollapseItem />
        </MDBContainer>
      );
    }
  }

export default CollapsePage;