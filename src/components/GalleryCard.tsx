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
        src={item.img}
        className="w-full h-full bg-base-100 shadow-xl image-full rounded-lg block"
      />
      <div className="flex rounded-b-lg flex-wrap mt-2 pointer-events-none absolute -bottom-1 max-xl:opacity-100 left-0 bg-black text-white bg-opacity-50 opacity-0 w-full py-1 px-3 font-semibold transition-all duration-200">
        {item.title}
      </div>
    </div>
  );
};

export default function List({
  setSelected,
  datalist,
}: {
  datalist: any;
  setSelected: any;
}) {
  return (
    <div className="columns-1 md:columns-2 xl:columns-4  2xl:columns-4 gap-4 max-w-full">
      {datalist?.map((item: any) => (
        <Card key={item.id} setSelected={setSelected} item={item} />
      ))}
    </div>
  );
}
