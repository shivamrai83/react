// const { useState, useEffect } = require("react");

import React from 'react';
import Heading from '../head';
import Adduser from './adduser';
export default function Ui(){

return(
        <div>
                <button >Add New User</button>
                <Adduser/>
                <div>
                        <table>
                                <th><Heading/></th>
                                <tbody></tbody>
                        </table>
                </div>
        </div>
);

}
