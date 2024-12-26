import { Circle } from "@mui/icons-material";

const BugIcon = (props) => {
  return (
    <div className="bg-red-500 rounded-sm w-4 text-white h-4 flex justify-center items-center">
      <Circle style={{ fontSize: "9px" }} />
    </div>
  );
};

export default BugIcon;
