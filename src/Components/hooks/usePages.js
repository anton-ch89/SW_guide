import { useState } from "react";

export const usePages = () => {

    const [pagePerson, setPagePerson ] = useState(1);
    const [pagePlanet, setPagePlanet ] = useState(1);
    const [pageStarship, setPageStarship ] = useState(1);

return {pagePerson, setPagePerson, pagePlanet, setPagePlanet, pageStarship, setPageStarship };
}