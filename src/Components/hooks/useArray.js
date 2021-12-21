import { useState } from "react/cjs/react.development";

export const useArray = () => {
    const [array, setArray] = useState([])
    return {array, setArray}
}