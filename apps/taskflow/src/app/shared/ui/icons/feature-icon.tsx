import { Bookmark } from "@mui/icons-material";

const FeatureIcon = (props) => {
  return (
    <div className="bg-green-500 rounded-sm w-4 text-white h-4 flex justify-center items-center">
      <Bookmark style={{ fontSize: "12px" }} />
    </div>
  );
};

export default FeatureIcon;
