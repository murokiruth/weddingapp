import React from 'react';
import {PartyCont, PartyH1, PartyWrapper, PartyCard, PartyImage, PartyName} from "./PartyElements";
// import Man1 from "../../images/gent.svg";

const Party = (id, img, alt, name ) => {
    return (
        <>
            <PartyCont id={id}>
                <PartyH1> Bridal Party 2</PartyH1>
                <PartyWrapper>
                    <PartyCard>
                        <PartyImage src={img} alt={alt}/>
                        <PartyName> {name} </PartyName>
                    </PartyCard>
                </PartyWrapper>
            </PartyCont>
        </>
    )
}

export default Party;
