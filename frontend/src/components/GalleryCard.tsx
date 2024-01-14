import { fadeInAnimation } from "@/util/framerMotion";
import { motion } from "framer-motion";

const Card = ({ setSelected, item }: { setSelected: any; item: any }) => {
  return (
    <div className="inline-block w-full mb-1 xl:mb-4 relative [&>div]:hover:opacity-100 [&>div]:hover:scale-[1.025] cursor-zoom-in">
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
        title={item?.img_tags}
        layoutId={`card-${item.id}`}
        src={item.img}
        className="w-full h-full bg-base-100 shadow-xl image-full rounded-lg block"
      />
      <div className="flex rounded-b-lg flex-wrap mt-2 pointer-events-none absolute bottom-0 xl:-bottom-1 max-xl:opacity-100 left-0 bg-black text-white bg-opacity-50 opacity-0 w-full px-2 font-semibold transition-all duration-200 max-xl:text-[14px] line-clamp-1">
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
    <div className="columns-2 md:columns-2 xl:columns-4  2xl:columns-4 xl:gap-4 gap-1 max-w-full">
      {datalist?.map((item: any, index: any) => (
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          key={item.id}
          custom={index}
          viewport={{
            once: true,
          }}
        >
          <Card setSelected={setSelected} item={item} />
        </motion.div>
      ))}
    </div>
  );
}
