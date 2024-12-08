import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


function ContactForm() {
    const divs = useRef([]);
    // const scrollTab = useRef();
    CustomHook(divs);

    return (
        <>
            <div className="contact-form" ref={(el) => el && divs.current.push(el)}>
                <form action="" method="post">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email" />
                    <textarea type="text" placeholder="Type Message..." rows={5} />
                    <button type="submit">
                        Send
                        <FontAwesomeIcon color="white" icon={faPaperPlane} />
                    </button>
                </form>
            </div>
        </>
    )

}

export default ContactForm;