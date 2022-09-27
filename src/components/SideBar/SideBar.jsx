import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Dashboard  <Link to="/dashboard" /> </MenuItem>
          <SubMenu title="Pages">
            <MenuItem>Cypto Exchange <Link to="/cryptoExchange" /></MenuItem>
            <MenuItem>Wallet <Link to="/wallet" /></MenuItem>
            <MenuItem>Apply for Crypto Loan <Link to="/loan" /></MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default SideBar;
