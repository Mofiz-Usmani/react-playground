import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://picsum.photos/id/1015/400/200",
  "https://picsum.photos/id/1016/400/200",
  "https://picsum.photos/id/1018/400/200",
];

const App = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  const prev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  return (
    <div className="flex justify-center">
      <div className="mt-30">
        <img src={images[index]} className="h-100 w-200" />

        <button
          className="absolute top-75 left-100 border-amber-200 bg-amber-200 border"
          onClick={prev}
        >
          <ChevronLeft strokeWidth={2} size={45} />
        </button>

        <button
          className="absolute top-75 left-270 border-amber-200 bg-amber-200"
          onClick={next}
        >
          <ChevronRight strokeWidth={2} size={45} />
        </button>
      </div>
    </div>
  );
};

export default App;
