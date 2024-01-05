import { items } from "./data";
import { motion } from "framer-motion";

const Card = ({ setSelected, item }: { setSelected: any; item: any }) => {
  return (
    <div className="inline-block w-full mb-4 relative [&>div]:hover:opacity-100 [&>div]:hover:scale-[1.025] cursor-zoom-in">
      <motion.img
        whileHover={{
          scale: 1.025,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => {
          setSelected(item);
        }}
        layoutId={`card-${item.id}`}
        src={item.url}
        className="w-full bg-base-100 shadow-xl image-full rounded-lg block"
      />
      <div className="flex rounded-b-lg flex-wrap mt-2 pointer-events-none absolute -bottom-1 left-0 bg-black text-white bg-opacity-50 opacity-0 w-full py-1 px-3 font-semibold transition-all duration-200">
        Lorem ipsum dolor sit amet.
      </div>
    </div>
  );
};

export default function List({ setSelected }: { setSelected: any }) {
  return (
    <div className="columns-2 md:columns-3 xl:columns-4 gap-4 max-h-[1000px] max-w-full overflow-x-hidden">
      {items.map(item => (
        <Card key={item.id} setSelected={setSelected} item={item} />
      ))}
    </div>
  );
}
