// const parent = document.getElementById("root");
// create u; and li inside the root
// const ul = document.createElement("ul");
// const li = document.createElement("li");
// const li1 = document.createElement("li");
// // styling to the ul and li
// ul.setAttribute(
//   "style",
//   "width : 400px; display: block; padding : 24px; background-color: yellow; margin:48px auto"
// );
// // style to li
// li.setAttribute(
//   "style",
//   "width : 400px ;display: block; padding : 24px; background-color : yellow; margin:48px auto"
// );
// li1.setAttribute(
//   "style",
//   "width : 400px;display: block; padding : 24px; background-color : yellow; margin:48px auto"
// );
// // add the li to the ul
// ul.innerText = "Whole New Ul";
// li.innerText = "Whole New li";
// li1.innerText = "Whole New li1";
// ul.appendChild(li);
// ul.appendChild(li1);
// parent.appendChild(ul);

// -------------------------  dom maniplation using react-----------------
// tag name , property , content
// const list1 = React.createElement("li", {}, [Item1]);
// const list2 = React.createElement("li", {}, [Item2]);
// const ul = React.createElement("ul", {}, [list1, list2]);

// const root = React.createRoot(parent)
// React.render(root);

// --------------------understand b/w reat dom element and js dom element----------------
// const d1 = document.createElement("div");
// console.dir(d1);
// console.dir(typeof d1);
// const d2 = React.createElement("div", {}, "");
// console.dir(d2);
// console.dir(typeof d2);

// --------------------- Understanding React Element ------------------------------
// const listItem1 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "li",
//     key: null,
//     ref: null,
//     props: {
//         children: "Item 1",
//     },
//     _owner: null,
//     _store: {},
// };
// const listItem1 = React.createElement("li", {}, "Item 11");

// const listItem2 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "li",
//     key: null,
//     ref: null,
//     props: {
//         children: "Item 2",
//     },
//     _owner: null,
//     _store: {},
// };
// const listItem2 = React.createElement("li", {}, "Item 22");

// const list = {
//     $$typeof: Symbol.for("react.element"),
//     type: "ul",
//     key: null,
//     ref: null,
//     props: {
//         children: [listItem1, listItem2],
//         style: {
//             backgroundColor: "yellow",
//             padding: "24px",
//         },
//     },
//     _owner: null,
//     _store: {},
// };
// const list = React.createElement("ul", {}, [listItem1, listItem2]);

// const root = ReactDOM.createRoot(parent);
// root.render(list);


// --------------------------------------------second half--------------------------------------
// const parent = document.getElementById('root');
// const ListItem1 = React.createElement('li', {}) , 'Item11');
// const list = <li>Item 11</li>
// const ListItem2 = React.createElement('li', {}) , 'Item2');












// ---------------------------------------------react using jsx-------------------------------
// const parent = document.getElementById('root');
// const root = ReactDOM.createElement(parent);
// const divhello= <div>Hello</div>; 
// const divReact= <div>React</div>;
// const container = (
//     <div>
//         {divhello}
//         {divReact}
//     </div>
// )
// root.render(container);


const parent = document.getElementById('root');
const root = ReactDOM.createElement(parent);
const texthello= <div>Hello</div>;            // react element
const textFrom = () =>{                       // react functional component
    return <div>From function</div>
}
const TextFrom = () =>{                       // react functional component  pascal case
    return <div>From function</div>
}
const divReact= () => <div>React</div>;       
const container = (
    <div>
        {divhello}
        {textFrom()}
        <TextFrom/>          
        {divReact()}
    </div>
)
root.render(container);