import {useEffect, useState} from "react";

export const useFetch = <T, >(url: string, someValue:T) => {

    const [object, setObject] = useState<T>(someValue);
    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => {
                setObject(value)
            });
    }, [url]);
    return object;
}

