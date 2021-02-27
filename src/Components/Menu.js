import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavLink } from "mdbreact";

export default () => (
  <BrowserRouter>

    <MDBNav color="elegant-color-dark" className="justify-content-end font-weight-bold ">
        <MDBNavLink  disabled to="#!">Teams</MDBNavLink>
        <MDBNavLink className="white-text" active to="#!">LeaderBoard</MDBNavLink>
    </MDBNav>

  </BrowserRouter>
);