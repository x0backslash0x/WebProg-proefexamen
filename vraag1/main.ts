/* main.ts
 *
 * 2024-2025 Patrick Lanove
 * BA Electronica-ICT/Cybersecurity
 * OLOD Web programming
 *
 * oefenexamen
**/

import { bordspelen } from "./bordspelen";

interface adaptation {
    type: string;
    year: number
}

interface bordspel {
    title: string;
    year: number;
    expansions: string[];
    awards: string[];
    adaptations: adaptation[];
}
