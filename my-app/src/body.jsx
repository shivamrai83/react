import React from 'react';
import heading from './head';
import rows from './row';
var data = [
    { id: 1, name: "bread", quantitiy: 50, location: "cupboard" },
    { id: 2, name: "milk", quantitiy: 20, location: "fridge" },
    { id: 3, name: "water", quantitiy: 10, location: "fridge" }
  ];


export default function body(){
    return <>
    <div>
        <table>
        <heading/>
        <rows />
        </table>
    </div>
    </>
}