import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Event = (props) => {
    const { value: { name, options }, number } = props;
    const NUMBER_OF_EXIRSE_BY_INDEX = 5;
    const exircises = options;
    let currentIndex = number * NUMBER_OF_EXIRSE_BY_INDEX;
    return (
        <MDBContainer>
            <h1>{name}</h1>
            {(
                exircises.map( (exircise) => {
                    currentIndex++;
                    return (
                        <MDBRow >
                            <MDBCol size="2" >{currentIndex}</MDBCol>
                            <MDBCol size="2" >{exircise.name}</MDBCol>
                            <MDBCol size="4" ><PerformanceBoard points={exircise.points} /></MDBCol>
                            <MDBCol size="2" >{exircise.time}</MDBCol>
                            <MDBCol size="2" >{exircise.score}</MDBCol>
                        </MDBRow>
                    );
                })
            )}
        </MDBContainer>
    );

};

const PerformanceBoard = (props) => {
    const { points } = props;
    const spots = points.split(',');
    const performanceSpots = ['P', 'R', 'W', 'F'];
    return (
        <div >
            {(performanceSpots.map(spot => {
                return spots.includes(spot) ? (
                <div className="chip"><i class="fas" >{spot}</i></div>
                ) : (<div className="chip"><i className="fas" ></i></div>)
            }))}
        </div>
    );
};

export default Event;
