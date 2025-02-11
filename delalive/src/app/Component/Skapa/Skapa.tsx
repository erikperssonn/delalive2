"use client";   
import React, { useEffect, useState } from 'react';
import { useSkapa } from './ControllerSkapa';   

export default function Skapa() {
    const controller = useSkapa(); 
    const [count, setCount] = useState(controller.getCount());

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(controller.getCount());
        }, 100); // Check for updates every 100ms 

        return () => clearInterval(interval);
    }, [controller]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => controller.testColor()}>testColor</button>
        </div>
    );
}