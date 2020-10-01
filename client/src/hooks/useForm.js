import { useState } from 'react'

function useForm(initialValue){
    const [values, setValues] = useState(initialValue);
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values)
      };

      return [values, handleChanges]
}

export default useForm; 
