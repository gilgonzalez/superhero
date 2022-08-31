import { heroes } from "../data/heroes";

export const getHeroesByPub = (publisher : string)=>{
    
    const validPublishers = ["DC Comics", "Marvel Comics"];

    if (!validPublishers.includes(publisher)){
        throw new Error(`${publisher} ins not a valid publisher`)
    }

    return heroes.filter((heroe) => heroe.publisher === publisher);


}