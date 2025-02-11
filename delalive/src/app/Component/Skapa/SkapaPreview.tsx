"use client";

import React, { useEffect, useState } from 'react';

import { useSkapa } from './ControllerSkapa';  

export default function SkapaPreview() {    

    const controller =  useSkapa();

    const [color, setColor] = useState(controller.getColor());
    
    useEffect(() => {
        const interval = setInterval(() => {
            document.body.style.backgroundColor = controller.getColor();
        }, 100); // Check for updates every 100ms 

        return () => {
            clearInterval(interval);
            document.body.style.backgroundColor = 'blue';
        };
    }, [controller]);

    return (
        <div>
            skapa preview
            <button onClick={() =>controller.increment()}>Save</button>
        </div>
    );

}