
import "./SkapaHomePage.css";

import Skapa from "./Skapa";
import SkapaPreview from "./SkapaPreview";
import { SkapaProvider } from "./ControllerSkapa";

export default function SkapaHomePage() {



    return (
        <SkapaProvider>
            <div className="skapa-home-page-main">
                <h1 className="skapa-home-page-h1">
                    Skapa inlägg
                </h1>
                <div className="skapa-home-page-divider">
                    <Skapa />
                    <SkapaPreview />

                </div>
                
            </div>
        </SkapaProvider>
    );
}