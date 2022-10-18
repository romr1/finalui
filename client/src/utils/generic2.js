import React, { useState } from 'react';
import "../Styles/GlobalStyle.css"


export function add_form_for_search(lable_text) {
    let next_page_route = '/Home/TPage/'
    const [pk_search, setSearch] = useState("");

    //const [input, setInput] = useState("");
    console.log(lable_text)
    console.log("***")
    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(event.target[0].value);
        console.log(pk_search)
        if (pk_search > 0) {
            window.location.href = next_page_route + pk_search
        }
    };
    // const search = (event) => {
    //     if (event.key === 'Enter') {
    //         alert(event.value);
    //     }
    // }
    return (
        <form onSubmit={handleSubmit} class="sideBySideForm">

            {/* <input type="text" placeholder="some text" class="search" onkeydown="search(this)" /> */}
            <input type="text" />
            <button class="btnStyle" type="submit"><span class="spStyle">Search {lable_text}</span></button>
        </form>
    )



}
