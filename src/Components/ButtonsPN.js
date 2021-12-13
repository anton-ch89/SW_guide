import React from 'react'
import { Button } from "./PageButton";


const ButtonsPN = ({page, setPage}) => {
    return (
        <>
                      <Button
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </Button>
 
        </>
    )
}

ButtonsPN.propTypes = {

}

export default ButtonsPN
