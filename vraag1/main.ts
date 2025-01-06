/* main.ts
 *
 * 2024-2025 Patrick Lanove
 * BA Electronica-ICT/Cybersecurity
 * OLOD Web programming
 *
 * oefenexamen vraag 1
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
    adaptations: Adaptation | any;
}

// console.log(Object.keys(boardgames[2].adaptations).length)
// boardgames.forEach((b: Boardgame) => console.log(`${b.title} adaptations: ${Object.keys(b.adaptations).length}`))

// NIeuwe array voor videogame adaptations
const boardgamesWithAdaptations: Boardgame[] = boardgames.filter((b: Boardgame) => Object.keys(b.adaptations).length > 0);
// console.log(boardgamesWithAdaptations);


// Bordspelen sorteren (op jaar van uitgaven en jaar van adaptation)
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

// veld aanpassen (titel)

// velden verwijder

// veld toevoegen (speil)

// console.log(boardgames);