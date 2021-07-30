import React from 'react';
import {PartyCont, PartyH1, PartyWrapper, PartyCard, PartyImage, PartyName} from "./PartyElements";
import Man1 from "../../images/gent.svg";
import Lady from "../../images/lady.svg";


const Party = () => {
    return (
        <>
            <PartyCont id="party">
                <PartyH1> Bridal Party</PartyH1>
                <PartyWrapper>
                    <PartyCard>
                        <PartyImage src={Man1}/>
                        <PartyName> John Doe </PartyName>
                    </PartyCard>
                    <PartyCard>
                        <PartyImage src={Man1}/>
                        <PartyName> John Doe </PartyName>
                    </PartyCard>
                    <PartyCard>
                        <PartyImage src={Man1}/>
                        <PartyName> John Doe </PartyName>
                    </PartyCard>
                    <PartyCard>
                        <PartyImage src={Man1}/>
                        <PartyName> John Doe </PartyName>
                    </PartyCard>
                    <PartyCard>
                        <PartyImage src={Man1}/>
                        <PartyName> John Doe </PartyName>
                    </PartyCard>

                    <PartyCard>
                        <PartyImage src={Lady}/>
                        <PartyName> Jane Doe </PartyName>
                    </PartyCard>
                    <PartyCard>
                        <PartyImage src={Lady}/>
                        <PartyName> Jane Doe </PartyName>
                    </PartyCard>
                    <PartyCard>
                        <PartyImage src={Lady}/>
                        <PartyName> Jane Doe </PartyName>
                    </PartyCard>
                    <PartyCard>
                        <PartyImage src={Lady}/>
                        <PartyName> Jane Doe </PartyName>
                    </PartyCard>
                    <PartyCard>
                        <PartyImage src={Lady}/>
                        <PartyName> Jane Doe </PartyName>
                    </PartyCard>
                </PartyWrapper>
            </PartyCont>
        </>
    )
}

export default Party;
