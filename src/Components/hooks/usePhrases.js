import { useState } from "react";

export const usePhrases = () => {
    const [phrase, setPhrase] = useState('Истинная Йоды мудрость откроется, если на него нажмешь ты...')
    return {phrase, setPhrase}
}