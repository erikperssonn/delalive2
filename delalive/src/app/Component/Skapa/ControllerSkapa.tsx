"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

const SkapaContext = createContext<SkapaController | undefined>(undefined);

interface SkapaProviderProps {
    children: ReactNode;
}

export const SkapaProvider: React.FC<SkapaProviderProps> = ({ children }) => {
    const [controller] = useState(new SkapaController());

    return (
        <SkapaContext.Provider value={controller}>
            {children}
        </SkapaContext.Provider>
    );
};

export const useSkapa = () => {
    const context = useContext(SkapaContext);
    if (!context) {
        throw new Error('useSkapa must be used within a SkapaProvider');
    }
    return context;
};

export class SkapaController {
    data: BlogComponent[];
    count: number;
    backgroundColor: string;

    constructor() {
        this.data = [];
        this.count = 0;
        this.backgroundColor = 'blue';
    }

    moveObjectUp(BlogComponent: BlogComponent) {
        const index = this.data.indexOf(BlogComponent);
        if (index > 0) {
            const temp = this.data[index - 1];
            this.data[index - 1] = BlogComponent;
            this.data[index] = temp;
        }
    }

    moveObjectDown(BlogComponent: BlogComponent) {
        const index = this.data.indexOf(BlogComponent);
        if (index < this.data.length - 1) {
            const temp = this.data[index + 1];
            this.data[index + 1] = BlogComponent;
            this.data[index] = temp;
        }
    }

    addObject(BlogComponent: BlogComponent) {
        this.data.push(BlogComponent);
    }

    removeObject(BlogComponent: BlogComponent) {
        const index = this.data.indexOf(BlogComponent);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    }

    setBackgroundColor(color: string) {
        this.backgroundColor = color;
    }

    getColor() {
        return this.backgroundColor;
    }

    
    getData() {
        return this.data;
    }

    increment() {
        this.count++;
    }

    getCount() {
        return this.count;
    }

    testColor() {
        this.backgroundColor = 'red';
        console.log(this.backgroundColor + "testColor");
    }
}


