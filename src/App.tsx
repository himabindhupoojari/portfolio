import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '@sections/Home/Home';
import About from '@sections/About/About';
import Header from '@sections/Header/Header';
import Experience from '@sections/Experience/Experience';
import Portfolio from '@sections/Portfolio/Portfolio';
import Skills from '@sections/Skills/Skills';


function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Header />
      <div key={location.pathname}  className='route-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
      </div>
    </div>
  )
}

export default App

// import React, { useEffect, useState } from "react";

// // Define type for array items
// interface Item {
//   id: number | string;
//   name: string;
// }

// function App() {
//   const arr: Item[] = [
//     { id: 0, name: "name1" },
//     { id: 1, name: "name2" },
//     { id: 2, name: "name3" },
//   ];

//   const [arrayList, setArrayList] = useState<Item[]>([]);

//   useEffect(() => {
//     setArrayList(arr);
//   }, []); // useEffect should not depend on arrayList to avoid infinite loop

//   const update = () => {
//     const upDatedArr = arr.map((item, index) =>
//       index === 2 ? { ...item, name: "updated name" } : item
//     );
//     console.log(upDatedArr, "upDatedArr");
//     setArrayList(upDatedArr);
//   };

//   const addItem = () => {    
//     const newArray = [...arrayList, { id: 3, name: "new item" }];
//     setArrayList(newArray);
//     console.log(newArray, "arrayList after add");
//   };

//   const deleteItem = (id: number) => {
//     const deleteItem = arrayList.filter((item)=> item.id !== id);
//     setArrayList(deleteItem);
//     console.log(deleteItem, 'deleteItem arr');
    
//   };

//   return (
//     <>
//       <p>Updated array with new name in place of existing one</p>
//       <button onClick={update}>Rewrite / Update array</button>

//       <p>Add array item</p>
//       <button onClick={addItem}>Add item</button>

//       <p>Delete array item</p>
//       <button onClick={() => deleteItem(2)}>Delete item</button>

//       <p>Array items</p>
//       {arrayList.map((item: Item, index: number) => (
//         <p key={index}>{item.name}</p>
//       ))}
//     </>
//   );
// }

// export default App;


// TypeScript for better clarity, works with JS too
// interface TreeNode {
//   id: number;
//   name: string;
//   children?: TreeNode[];
// }

// const data: TreeNode = {
//   id: 1,
//   name: "Root",
//   children: [
//     {
//       id: 2,
//       name: "Child 1",
//       children: [{ id: 4, name: "Grandchild 1" }]
//     },
//     { id: 3, name: "Child 2" },
//     {
//       id: 4,
//       name: "Child 3",
//       children: [{ id: 7, name: "Grandchild 2", children: [{ id: 4, name: "Great Grandchild 1" }] }]
//     },
//   ]
// };

// const Tree: React.FC<{ node: TreeNode }> = ({ node }) => {
//   return (
//     <ul>
//       <li>
//         {node.name}
//         {node.children?.map((child) => (
//           <Tree key={child.id} node={child} />
//         ))}
//       </li>
//     </ul>
//   );
// };

// export default function App() {
//   return (
//     <div>
//       <h1>Recursive Tree</h1>
//       <Tree node={data} />
//     </div>
//   );
// }
