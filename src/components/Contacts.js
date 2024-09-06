import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  const [listContacts] = useState([
    {
      title: "Phone Number",
      link: "https://www.instagram.com/themohitgiri/",
      aria_label: "Phone Number",
      icon: faPhone,
    },
    {
      title: "Email",
      link: "https://www.instagram.com/themohitgiri/",
      aria_label: "Email",
      icon: faMailBulk,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/themohitgiri/",
      aria_label: "Instagram",
      icon: faInstagram,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mohitgiri/",
      aria_label: "LinkedIn",
      icon: faLinkedin,
    },
    {
      title: "GitHub",
      link: "https://github.com/girimohit",
      aria_label: "GitHub",
      icon: faGithub,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const subject = `${name} wants to connect`;
    const body = `${message}`;
    const receivers_email = "mohitgiri1103@gmail.com";
    const mailtoLink = `mailto:${receivers_email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" }); // Clear the form
  };

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="contacts" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        CONTACT ME
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
      </div>

      <div className="contact-form" ref={(el) => el && divs.current.push(el)}>
        <form action="" method="post" onSubmit={handleContactSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            type="text"
            name="message"
            placeholder="Type Message..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">
            Send
            <FontAwesomeIcon color="white" icon={faPaperPlane} />
          </button>
        </form>
      </div>

      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className="item" key={key}>
            {/* <h3>{value.title}</h3> */}
            {/* <div>{value.value}</div> */}
            <a href={value.link} target="_blank" rel="noreferrer" aria-label={value.aria_label}>
              <FontAwesomeIcon size="2x" icon={value.icon} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Contacts;
