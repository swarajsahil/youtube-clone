import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
const Sidebar = () => {
  const isMenu=useSelector(store=>store.app.isMenu);
  if(!isMenu) return null;
  return  (
    <div className="w-48 shadow-lg h-full flex flex-col">
      <ul className="p-4 text-start w-11/12">
        <li className="px-2 py-1 flex items-center gap-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              fill="currentColor"
              className="bi bi-house-door"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
            </svg>
          </span>
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 py-1 flex items-center gap-3">
          <span>
            <svg height="26" viewBox="0 0 24 24" width="24" focusable="false">
              <path d="m17.77 10.32-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"></path>
            </svg>
          </span>
          Shorts
        </li>
        <li className="px-2 py-1 flex items-center gap-3">
          <span>
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false">
              <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
            </svg>
          </span>{" "}
          Subscriptions
        </li>
      </ul>
      <ul className="p-4 text-start w-11/12">
        <li className="px-2 py-1">Library</li>
        <li className="px-2 py-1">History</li>
        <li className="px-2 py-1">Your Videos</li>
        <li className="px-2 py-1">Watch later</li>
        <li className="px-2 py-1">Your clips</li>
      </ul>
      <h3 className="font-medium text-xl">Explore</h3>
      <ul className="p-4 text-start w-11/12">
        <li className="px-2 py-1">Trending</li>
        <li className="px-2 py-1">Shopping</li>
        <li className="px-2 py-1">Music</li>
        <li className="px-2 py-1">Movies</li>
        <li className="px-2 py-1">Live</li>
        <li className="px-2 py-1">Gaming</li>
        <li className="px-2 py-1">News</li>
        <li className="px-2 py-1">Sports</li>
        <li className="px-2 py-1">Learning</li>
      </ul>
    </div>
  );
};

export default Sidebar;
