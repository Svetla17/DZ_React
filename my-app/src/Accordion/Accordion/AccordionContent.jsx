import { useContext } from "react";
import { ContextAccordion } from "./Accordion";

const AccordionContent = ({ children }) => {
  const { isOpened } = useContext(ContextAccordion);
  if (isOpened) {
    return <div>{children}</div>;
  }
  return <></>;
};

export default AccordionContent;
