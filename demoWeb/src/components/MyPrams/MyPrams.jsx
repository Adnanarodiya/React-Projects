import { useParams } from "react-router-dom";
const MyPrams = () => {
  const { id } = useParams();
  return (
    <div className=" bg-gray-600 text-white italic p-4 text-center text-3xl">
      MyPrams : {id}
    </div>
  );
};

export default MyPrams;
