import { useState } from "react";
import { Tab } from "@headlessui/react";
import data from "../../config.json";

const aboutData = data.pt.about;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// headless ui tabs props
export const MyTabs = () => {
  let [skills] = useState(aboutData.skills);

  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 dark:bg-gray-50/20 p-1">
        {Object.keys(skills).map((skill) => (
          <Tab
            key={skill}
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 dark:text-blue-50",
                "ring-white dark:ring-warm-gray-400 ring-opacity-60 ring-offset-2 ring-offset-blue-400 dark:ring-offset-warm-gray-500 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white dark:bg-warm-gray-500 shadow"
                  : "text-gray-400 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            {skill}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2">
        {Object.values(skills).map((posts, idx) => (
          <Tab.Panel
            key={idx}
            className={classNames(
              "rounded-xl bg-white dark:bg-warm-gray-600 p-3"
            )}
          >
            <ul>
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="dark:text-white relative rounded-md p-3 hover:bg-gray-100 dark:hover:bg-warm-gray-500"
                >
                  <h3 className="text-sm font-medium leading-5">
                    {post.title}
                  </h3>
                  <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-warm-gray-300">
                      <div
                        className={
                          "bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                        }
                        style={{ width: post.progress }}
                      ></div>
                    </div>
                  </ul>
                </li>
              ))}
            </ul>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
