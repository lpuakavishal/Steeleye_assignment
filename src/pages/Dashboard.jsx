import {  useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";


import { Button } from "../stories/Button";

const Dashboard = () => {
  const [data,setData]=useState(mockData.results);
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
 
    const handle2=(e)=>
    {
           const t=e.target.value;
           setSearchText(t);
           setData(mockData.results.filter(x=>{
           return x["&id"].toLowerCase().includes(t.toLowerCase())
           }))
    }
  
  
  
  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle="6 orders" />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => handle2(e)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={data} time={timestamps.results} currency={currency} setSelectedOrderDetails={setSelectedOrderDetails} setSelectedOrderTimeStamps={setSelectedOrderTimeStamps} />
      </div>
    <Button />
    </div>
  );
};

export default Dashboard;
