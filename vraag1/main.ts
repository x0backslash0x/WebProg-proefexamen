/* main.ts
 *
 * 2024-2025 Patrick Lanove
 * BA Electronica-ICT/Cybersecurity
 * OLOD Web programming
 *
 * oefenexamen
**/

import { boardgames } from "./bordspelen";

interface Adaptation {
    type: string;
    year: number
}

interface Boardgame {
    title: string;
    year: number;
    expansions: string[];
    awards: string[];
    adaptations: Adaptation[];
}

// NIeuwe array voor videogame adaptations
// let BoardgamesWithAdaptations: Boardgame[] = boardgames.filter((b: Boardgame) => b.adaptations.length > 0)


// Bordspelen sorteren

boardgames.sort((a, b) => {
    let yeara = a.year;
    let yearb = b.year
    if ( yeara < yearb ) {
        return -1;
    } else if ( yeara > yearb ) {
        return 1;
    } else {
        return 0;
    }
});

console.log(boardgames);