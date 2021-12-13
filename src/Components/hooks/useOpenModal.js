import { useState } from "react/cjs/react.development";

export const useOpenModal = () => {
    const [openModal, setOpenModal] = useState(false)
    return {openModal, setOpenModal}
}