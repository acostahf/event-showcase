import { data } from "autoprefixer";

const LiItem = (props) => (
  <li className="flex space-x-2">
    <div>
      <h4 className="font-bold text-sm">When</h4>
      <div className="text-sm font-bold tetxt-gray-700 px-2 py-1 bg-blue-300 rounded transition-colors duration-300">
        {props.when}
      </div>
    </div>
    <div>
      <h4 className="font-bold text-sm">Where</h4>
      <div className="text-sm font-bold tetxt-gray-700 px-2 py-1 bg-blue-300 rounded transition-colors duration-300">
        {props.where}
      </div>
    </div>
    <div>
      <h4 className="font-bold text-sm">What</h4>
      <div className="text-sm font-bold tetxt-gray-700 px-2 py-1 bg-blue-300 rounded transition-colors duration-300">
        {props.what}
      </div>
    </div>
  </li>
);

export default function Events(evnts) {
  console.log(evnts);
  return (
    <div>
      <div className="text-center md:text-left md:flex max-w-3xl mx-auto mt-24">
        <h1 className="font-bold text-6xl leading-tight">Events</h1>
      </div>
      <div className=" text-center md:text-left max-w-3xl mx-auto mt-5">
        <ul className=" space-y-4 items-center">
          {evnts.events.map((evnt, i) => (
            <LiItem
              key={i}
              when={evnt.when}
              where={evnt.where}
              what={evnt.what}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
