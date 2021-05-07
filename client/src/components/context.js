import React from "react";
import { Web3JS } from "./context/context.js";
import getWeb3 from "./getWeb3";
const InfoContainer = (props) => {
    return (
        <div>
            <Web3JS value={getWeb3}></Web3JS>
        </div>
    );
};
export default InfoContainer;
