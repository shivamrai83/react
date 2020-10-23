import React from 'react';




export default function rows(){
<tbody>
        {
            props.map((val)=>(
                <tr>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.quantitiy}</td>
                    <td>{val.location}</td>
                </tr>
            ))
        }
</tbody>
}