import { Check } from "@mui/icons-material";

const TaskIcon = (props) => {
  return (
    <div className="bg-blue-400 rounded-sm w-4 text-white h-4 flex justify-center items-center">
      <Check style={{ fontSize: "12px" }} />
    </div>
  );
};

export default TaskIcon;
