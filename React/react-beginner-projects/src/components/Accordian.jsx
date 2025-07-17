import AccordianHelper from "./AccordianHelper";
import { accordionData } from "./content";
const Accordian = () => {
  return (
    <div className="accordian">
      {accordionData.map(({ title, content }) => (
        <AccordianHelper title={title} content={content} />
      ))}
    </div>
  );
};

export default Accordian;
