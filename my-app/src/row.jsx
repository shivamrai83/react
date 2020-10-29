import React from 'react';




export default function Rows(props){

return (<table>
        <tbody>
        {
            props.shivam.map((val)=>(
                <tr>
                    <td>{val.id}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                    <td>{val.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                    <td>{val.quantitiy}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                    <td>{val.location}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                </tr>
            ))
        }
</tbody>
</table>
)
}