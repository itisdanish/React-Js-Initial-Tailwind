const root = document.getElementById("root2");

// const heading = document.createElement("h1");
// heading.innerText = "Root 2 Heading";
// heading.setAttribute('id','heading2')

// root.appendChild(heading);

const heading = React.createElement(
  "h1",
  {
    id: "heading2",
  },
  "ReactJS"
);

const root2 = ReactDOM.createRoot(root);
root2.render(heading);
