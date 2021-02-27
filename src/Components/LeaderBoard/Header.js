import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

export default () => (
    <MDBContainer className="margin-top-50 elegant-color-dark white-text header-background" style={{ paddingTop: 20 }} >
        <MDBRow>
            <MDBCol lg="12" md="12" className="justify-content-center" >
                <h1 id="header-title" className="text-uppercase font-weight-bold" >Apocalypse city</h1>
            </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-end basic-info">
            <MDBCol size="1" className=" basic-info" > BIB</MDBCol>
            <MDBCol size="1" className=" basic-info" > AGE</MDBCol>
            <MDBCol size="1" className=" basic-info" > GENDER</MDBCol>
            <MDBCol size="1" className=" basic-info" > TIME</MDBCol>
            <MDBCol size="1" className=" basic-info" > SCORE</MDBCol>
        </MDBRow>
    </MDBContainer>
);