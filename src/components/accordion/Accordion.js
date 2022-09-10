import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import "./accordion.css";

function AccordionComponent(props) {
  const [open, setOpen] = useState("1");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="for_accordion">
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">
            <img src="./images/icon_for_accordion_header.png" alt="err" />{" "}
            Беседки
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <ul>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            <img src="./images/icon_for_accordion_header.png" alt="err" /> Бани
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <ul>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            <img src="./images/icon_for_accordion_header.png" alt="err" />{" "}
            Площадки
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <ul>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">
            <img src="./images/icon_for_accordion_header.png" alt="err" /> Дома
          </AccordionHeader>
          <AccordionBody accordionId="4">
            <ul>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">
            <img src="./images/icon_for_accordion_header.png" alt="err" />{" "}
            Перголы
          </AccordionHeader>
          <AccordionBody accordionId="5">
            <ul>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">
            <img src="./images/icon_for_accordion_header.png" alt="err" />{" "}
            Бренды
          </AccordionHeader>
          <AccordionBody accordionId="6">
            <ul>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
              <li>Something here</li>
            </ul>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
