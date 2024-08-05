// Define a parent element with nested child elements using React.createElement
const parent = React.createElement(
  "div", // Type of element (in this case, a div)
  {       // Props object (attributes like id, class, etc.)
    id: "parent", // ID attribute for the parent div
  },
  [       // Array of child elements
    React.createElement(
      "div",  // Type of element for child1 (another div)
      {
        id: "child1", // ID attribute for child1 div
      },
      [             // Array of child elements for child1 div
        React.createElement("h1", { id: "heading" }, "h1 Child1 Updated..."), // First child: h1 element with text
        React.createElement("h2", { id: "heading" }, "h2 Child1 Updated..."), // Second child: h2 element with text
      ]
    ),
    React.createElement(
      "div",  // Type of element for child2 (another div)
      {
        id: "child2", // ID attribute for child2 div
      },
      [             // Array of child elements for child2 div
        React.createElement("h1", { id: "heading" }, "h1 Child2 Updated..."), // First child: h1 element with text
        React.createElement("h2", { id: "heading" }, "h2 Child2 Updated..."), // Second child: h2 element with text
      ]
    ),
  ]
);

console.log(parent); // Log the parent element to the console

// Create a heading element using React.createElement
const heading = React.createElement(
  "h1",                     // Type of element (in this case, an h1)
  {                          // Props object (attributes like id, class, etc.)
    id: "heading",           // ID attribute for the heading element
    className: "heading",    // Class attribute for the heading element
  },
  "Hello React"              // Text content of the heading element
);

// Create a root using ReactDOM.createRoot and render the parent element along with the heading element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent, heading);
