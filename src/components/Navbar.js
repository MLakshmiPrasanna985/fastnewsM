// import React from 'react';

// function Navbar() {
//     return (
//         <nav className="bg-blue-600 p-4">
//             <div className="container mx-auto flex justify-between items-center">
//                 <div className="text-white text-xl font-bold">FastNews</div>
//                 <div className="text-white">Menu</div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

// import React, { useState } from 'react';

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState('');

//   const handleClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <nav className="bg-blue-600 text-white py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">FastNews</h1>
//         <ul className="flex space-x-4">
//           {['Home', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'].map((item) => (
//             <li key={item}>
//               <a
//                 href={`#${item.toLowerCase()}`}
//                 className={`hover:text-green-500 ${activeLink === item ? 'text-green-500' : ''}`}
//                 onClick={() => handleClick(item)}
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import logo from '../assets/newsLogo.jpeg'; // Assuming 'assets' is one level up
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-gray-800 text-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="News Report Logo" className="h-10 w-10 mr-3" />
          <h1 className="text-2xl font-extrabold text-purple-400 tracking-wider shadow-lg">
            NewsMania
          </h1>
        </div>
        <ul className="flex space-x-4">
          {['Home', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`hover:text-green-500 ${activeLink === item ? 'text-green-500' : ''}`}
                onClick={() => handleClick(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
