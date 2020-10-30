import React from 'react';
import Uibody from './uibody';
import Heading from '../head';
export default function UiWrapper(){

    return (
        <>
        <div>
                        <table>
                                <th><Heading/></th>
                                <tbody>
                                        <Uibody/>                                                                            
                                </tbody>
                                <button>check arr</button>

                        </table>
                </div>
        </>
    )

}