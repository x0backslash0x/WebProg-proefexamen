/* bordspellen.ts
 *
 * 2024-2025 Patrick Lanove
 * BA Electronica-ICT/Cybersecurity
 * OLOD Web programming
 *
 * oefenexamen vraag 2
**/

// Bordspel interface
export interface Bordspel {
    title: string;
    author: string;
    bgg_score: number;
  }
  
  // Lijst met bordspellen
  export const bordspellen: Bordspel[] = [
    { title: "Catan", author: "Klaus Teuber", bgg_score: 7.2 },
    { title: "Gloomhaven", author: "Isaac Childres", bgg_score: 8.8 },
    { title: "Pandemic", author: "Matt Leacock", bgg_score: 7.6 },
    { title: "Terraforming Mars", author: "Jacob Fryxelius", bgg_score: 8.4 }
  ];