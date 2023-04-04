import { useState } from "react";

export function useForm(initValues) {

    const [values, setValues] = useState(initValues);

    const onChangeHandler = (e) => {

        if (typeof e === 'string') {

            if (e.startsWith('+')) {

                values.quantity += 1;

            } else if (e.startsWith('-')) {

                values.quantity === 1 ? values.quantity = 1 : values.quantity -= 1;

            }
        } else {

            setValues(x => ({ ...x, [e.target.name]: e.target.value }));
        }
    }

    return { values, onChangeHandler }
}