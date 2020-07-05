import React from 'react';
import styled from 'styled-components';


export const Settings = () => {
    return(
        <div>
            <table>
                <tr>
                    <th>
                    <div className="box" id="recentsbox">
            <p className="terminal">Coming Soon!<br />To make Changes, use the --command name-- command to edit Peregrine</p>
        </div>
        <div className="box" id="recentsbox">
            <p className="terminal">About Plugin:<br />Name: Peregrine<br />Version: 1.0<br />Website: ------------</p>
        </div>
                    </th>
                </tr>
            </table>
        </div>
    );
}