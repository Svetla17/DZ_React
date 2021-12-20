import { useContext } from "react";
import { ContextAccordion } from "./Accordion";

const AccordionTitle = ({ children }) => {
  const { onChange, isOpened } = useContext(ContextAccordion);
  const handleClick = () => {
    onChange(!isOpened);
  };
  return <div onClick={handleClick}>{children}</div>;
};

export default AccordionTitle;
