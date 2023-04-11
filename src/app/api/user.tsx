import {useEffect} from "react";


export default function user {
    useEffect(() => {
        fetch('/api/user')
        .then(response => response.json())
        .then(data => console.log(data))
    )}
}, [] 
