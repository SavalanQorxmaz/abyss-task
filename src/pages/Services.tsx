import { useState,useCallback,useEffect,useRef} from "react"
import { useDispatch,useSelector } from "react-redux"
import Categories from "../components/Categories"
import Category from "../components/Category"
import CategoryGroup from "../components/CategoryGroup"
import { getScale,setScale } from "../scaleSlice"


const useMouseDelta = (initialPosition: {left:number, top: number}) => {
  // The distance the mouse has moved since `mousedown`.
  const [dragging, setDragging] = useState(false);
  const [result, setResult] = useState(initialPosition);
  const [currentPosition, setCurrentPosition] = useState(initialPosition);

  // Original position independent of any dragging.  Updated when done dragging.
  const origin = useRef(initialPosition);

  const handleMouseDown = useCallback((e:any) => {
    origin.current.left = e.clientX;
    origin.current.top = e.clientY;
    setDragging(true);
  }, []);

  const handleMouseUp = useCallback(
    (e:any) => {
      setDragging(false);
      setCurrentPosition(result);
    },
    [result]
  );

  const handleMouseMove = useCallback(
    (e:any) => {
      if (!dragging) {
        return;
      }
      setResult((prev) => ({...prev,['left']:currentPosition.left + e.clientX - origin.current.left,['top']:currentPosition.top + e.clientY - origin.current.top,}));
    },
    [currentPosition, dragging]
  );

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dragging, handleMouseDown, handleMouseUp, handleMouseMove]);

  return result;
};

const Services = () => {
  const position = {...useMouseDelta({left:100, top:100})};
  const [mouseDown,setMouseDown] = useState(false)  

  return (
    <div className="services"style={{ left: `${position.left}px`,top:`${position.top}px` }}>
      <CategoryGroup/>
    </div>
  )
}

export default Services