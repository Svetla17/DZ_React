import { createContext, useState } from "react";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";
// import "./Accordion.scss";

export const ContextAccordion = createContext({});

const Accordion = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  console.log(isOpened);
  return (
    <ContextAccordion.Provider value={{ isOpened, onChange: setIsOpened }}>
      <div>{children}</div>
    </ContextAccordion.Provider>
  );
};

Accordion.AccordionTitle = AccordionTitle;
Accordion.AccordionContent = AccordionContent;

export default Accordion;
