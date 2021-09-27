import { useState } from "react"

export const useForm = (initialState) => {

  const [formValues, setState] = useState(initialState);

  const handlerInputChange = ({target}) => {

    setState({
      ...formValues,
      [target.name]: target.value
    });
    
  }

  return {
    formValues,
    handlerInputChange
  }

}