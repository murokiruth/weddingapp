import React from "react";
import { DetailsCont, DetailsH1, DetailsWrapper, DetailsCard, DetailsH3,Date, Venue, DetailsP} from "./DetailsElements";

const Details = () => {
    return (
        <DetailsCont id="details">
            <DetailsH1> Our Wedding Day </DetailsH1>
            <DetailsWrapper>
                <DetailsCard>
                    <DetailsH3>Date and Time </DetailsH3>
                    <Date> April 21st 2022 at 3pm CST</Date>
                    <DetailsH3> Ceremony</DetailsH3>
                    <Venue>Ashton Gardens</Venue>
                    <DetailsP>Both the ceremony and reception will be at this location. The Ceremony at the chapel onSite and the reception at the main building.</DetailsP>
                    <address>2001 Ashton Gardens Ln, Corinth, TX 76210</address>
                </DetailsCard>
            </DetailsWrapper>
        </DetailsCont>
    )
}

export default Details;