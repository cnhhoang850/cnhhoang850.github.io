import Navigation from "./components/Navigation";
import Divider from "./components/Divider";
import Menu from "./components/Menu";
import Search from "./components/SearchBar";
import "./App.css";

function App() {
  let menuItems = [
    {
      firstName: "FRAPPU",
      lastName: "CHOCO",
      price: "29.000VND",
      index: 1,
    },
    {
      firstName: "FRAPPU",
      lastName: "VANI",
      price: "39.000VND",
      index: 2,
    },
    {
      firstName: "COFFEE",
      lastName: "CHOCO",
      price: "29.000VND",
      index: 3,
    },
    {
      firstName: "FRAPPU",
      lastName: "MINT",
      price: "59.000VND",
      index: 4,
    },
    {
      firstName: "MARU",
      lastName: "MATCHA",
      price: "69.000VND",
      index: 5,
    },
    {
      firstName: "FRAPPU",
      lastName: "RED",
      price: "29.000VND",
      index: 6,
    },
    {
      firstName: "COFFEE",
      lastName: "MALLOW",
      price: "79.000VND",
      index: 7,
    },
    {
      firstName: "MILK",
      lastName: "BOBA",
      price: "29.000VND",
      index: 8,
    },
    {
      firstName: "MILK",
      lastName: "TEA",
      price: "29.000VND",
      index: 9,
    },
    {
      firstName: "PEACH",
      lastName: "TEA",
      price: "29.000VND",
      index: 10,
    },
  ];
  return (
    <>
      <Navigation />
      <Divider />
      <Search />
      <Menu menuItems={menuItems} />
    </>
  );
}

export default App;
