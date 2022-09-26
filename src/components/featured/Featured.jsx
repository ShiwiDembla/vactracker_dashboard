import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {


  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Vaccinated</h1>
        {/* <MoreVertIcon fontSize="large" /> */}
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={57} text={"57%"} strokeWidth={8} styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: "#4ba796",
            textColor: "#4ba796",
            //  transition: 'stroke-dashoffset 0.5s ease 0s',
            // strokeLinecap: 'butt',
          })}/>
        </div>
        <p className="title2" >Total people vaccinated</p>
        {/* <p className="amount">$420</p> */}
        <p className="desc">
          The covid affect is decreasing day by day
        </p>
        {/* <div className="bottom">
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Featured;
