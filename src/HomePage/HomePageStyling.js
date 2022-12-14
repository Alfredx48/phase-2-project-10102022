import { createGlobalStyle } from "styled-components"

const HomePageStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Sono:wght@400;700&display=swap');
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

table td {
    border: 1px solid grey;
    width: 100px;
    height: 100px;
    color: cornsilk;
  }
  table
  {
    background:black;
  
  }
  table td
  {
    padding:10px;
  }
  table tr:first-child
  {
    box-shadow:0px 8px 5px -5px cornsilk;
}
table tr:nth-child(2)
{
  box-shadow:0px -8px 5px -5px cornsilk
        , 0px 8px 5px -5px cornsilk;
}
table tr:last-child
{
  box-shadow:0px -8px 5px -5px cornsilk;
}
table tr td:first-child
{
  box-shadow:8px 0px 5px -5px cornsilk;
}
table tr td:nth-child(2)
{
  box-shadow:-8px 0px 5px -5px cornsilk
        , 8px 0px 5px -5px cornsilk;
}
table tr td:last-child
{
  box-shadow:-8px 0px 5px -5px cornsilk;
}

html,
body {
  min-height: 100vh;
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

body {
  background: linear-gradient(250deg, tomato, lightblue);
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;

}
ul,
li {
  list-style: none;
  min-height: 150px;
  margin: 0;
  padding: 0;
}

ul {
  display: flex;
  flex-direction: column;
  background: azure;
  padding: 20px;
  border-radius: 25px;
  margin-left: 100px;
  margin-right: 100px;
}

li {
  background-color: rgba(214, 214, 214, 0.5);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  cursor: pointer;
  text-align:center;
}

li:last-child {
  margin-bottom: 0px;
}

.avatar {
  width: 40px;
  border-radius: 20px;
}

.nav {
  display: "inline-block";
  padding: "12px";
  // margin: "0 6px 6px";
  color: "white";
}
`
export default HomePageStyle