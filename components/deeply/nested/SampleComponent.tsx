import React from "react";

import { randomizer } from "../../../shared/randomizer";

export function SampleComponent() {
    const a = randomizer();

    return (
        <div>
            <strong>I am strong {a}</strong>         
        </div>
    );
}
