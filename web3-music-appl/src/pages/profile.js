import React from "react";
import styles from '../App.css';
import WallectCard from "../wallectcard";
import user from "../App";


function userProfile(){
    return (
        <body style={{backgroundColor:"bisque"}}>
            <div class="main">
                
                <center>
                    <h1 style={{fontSize: "4em"}}>Profile</h1>
                    <div class="information">
                        
                        <h2>Wallet Address: </h2>
                        <h3>-------------- </h3>
                        <h2>Balance: </h2>
                        <h3>-------------- </h3>
                        <h2>Playlists: </h2>
                        <h3>-------------- </h3>
                    </div>
                </center>
            </div>
        </body>
        )
}
export default userProfile; 