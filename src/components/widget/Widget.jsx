import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { HealthAndSafetyOutlined } from "@mui/icons-material";

const Widget = ({ type, amount }) => {
  console.log("widget type",type);
  let data;

  //temporary
  const amount1 = 4582;
  const amount2 = 35002;
  const amount3 = 4570;
  const amount4 = amount1 + amount2 + amount3;
  const diff = 20;

  switch (type) {
    case "user":
   data = {
          title: "Users ",
          isMoney: false,
          link: "See all users",
          count: amount,
          icon: (
            <PersonOutlinedIcon
              className="icon"
              style={{
                color: "crimson",

                backgroundColor: "white",
              }}
            />
          ),
        };
        break;
  case "centers":
   data = {
    title: "Centers ",
    isMoney: false,
    count: amount,
    // link: "See all centers",
    icon: (
      <PersonOutlinedIcon
                className="icon"
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green", }}
              />
    ),
  };

  break;
  case "requests":
   data = {
    title: "Vaccine Requests ",
    isMoney: false,
    count:amount,
    // link: "See all Requests",
    icon: (
      <PersonOutlinedIcon
        className="icon"
        style={{
          color: "crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
        }}
      />
    ),
  };
  break;
  case "vaccinated":
   data = {
    title: "Vaccinated ",
    isMoney: false,
    count:amount,
    // link: "See all Vaccinated",
    icon: (
      <PersonOutlinedIcon
        className="icon"
        style={{
          color: "crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
        }}
      />
    ),
  };
      }

     


  // switch (type) {
  //   case "user":
  //     data = {
  //       title: "COVID ",
  //       isMoney: false,
  //       link: "See all users",
  //       icon: (
  //         <PersonOutlinedIcon
  //           className="icon"
  //           style={{
  //             color: "crimson",
  //             backgroundColor: "rgba(255, 0, 0, 0.2)",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "order":
  //     data = {
  //       title: "DEATHS",
  //       isMoney: false,
  //       // link: "View all orders",
  //       icon: (
  //         <PersonOutlinedIcon
  //           className="icon"
  //           style={{
  //             backgroundColor: "rgba(218, 165, 32, 0.2)",
  //             color: "goldenrod",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "earning":
  //     data = {
  //       title: "RECOVERED",
  //       isMoney: true,
  //       // link: "View net earnings",
  //       icon: (
  //         <PersonOutlinedIcon
  //           className="icon"
  //           style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "balance":
  //     data = {
  //       title: "TOTAL",
  //       isMoney: true,
  //       // link: "See details",
  //       icon: (
  //         <AccountBalanceWalletOutlinedIcon
  //           className="icon"
  //           style={{
  //             backgroundColor: "rgba(128, 0, 128, 0.2)",
  //             color: "purple",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   default:
  //     break;
  // }

  return (
    <div className="widget">
      <div className="left">
        <span className="title"> {data.title}</span>
        <span className="counter">
         {data.count}
        </span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          30%
        </div> */}
        {/* <div className="icon">{data.icon}</div> */}
        {/* <PersonOutlinedIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            /> */}
      </div>
    </div>
  );
};

export default Widget;
