import React, { useEffect, useState } from 'react'
import Count from '../Components/Count/Count'

export default function CountContainer({min, max, setContador,contador}) {

    const onAdd =(sign) => {
        if ( (sign === '+') && (contador < max) ) setContador(contador+1)
        else if ((sign ==='-') && (contador > min) )setContador(contador-1)
    }

    return (
        <Count contador={contador} onAdd={onAdd}/>      
    )
}
