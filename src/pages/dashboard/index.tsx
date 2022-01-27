import { DotsVerticalIcon } from '@heroicons/react/solid';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';
import fill from 'lodash/fill'

import Dashboard from "@/components/layouts/Dashboard";

const stats = [
  { name: "Diaspora's Accumulated Wealth", stat: '$2,071,897' },
  { name: 'Your Total Contributions', stat: '$12,465' },
  { name: 'This Weeks', stat: '$24.54' },
];

const projects = [
  { name: 'Government Orgs.', initials: 'GO', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'NGO', initials: 'NGO', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Trusts', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'Grassroot Org', initials: 'GR', href: '#', members: 8, bgColor: 'bg-green-500' },
];

const files = fill([], {
  title: 'IMG_4985.HEIC',
  size: '3.9 MB',
  source:
    'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
}, 0 , 4);

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


function Stats() {
  return (
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
  );
}

function Orgs() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <li key={person.email} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">{person.name}</h3>
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {person.role}
                </span>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">{person.title}</p>
            </div>
            <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={person.imageUrl} alt="" />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Call</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

// const people = fill([], {
//   name: 'Fonkoze',
//   title: 'Microfinance',
//   role: 'Certified',
//   email: 'janecooper@example.com',
//   telephone: '+1-202-555-0170',
//   imageUrl: 'https://pbs.twimg.com/profile_images/893482778347671554/Ct0HdeRA_400x400.jpg'
// }, 0, 12)

const people = [
  {
    name: 'Fonkoze',
    title: 'Microfinance',
    role: 'Certified',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl: 'https://pbs.twimg.com/profile_images/893482778347671554/Ct0HdeRA_400x400.jpg'
  },
  {
    name: 'Fonkoze',
    title: 'Microfinance',
    role: 'Certified',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl: 'https://pbs.twimg.com/profile_images/893482778347671554/Ct0HdeRA_400x400.jpg'
  },
  {
    name: 'Fonkoze',
    title: 'Microfinance',
    role: 'Certified',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl: 'https://pbs.twimg.com/profile_images/893482778347671554/Ct0HdeRA_400x400.jpg'
  },
  {
    name: 'Fonkoze',
    title: 'Microfinance',
    role: 'Certified',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl: 'https://pbs.twimg.com/profile_images/893482778347671554/Ct0HdeRA_400x400.jpg'
  }
]



const Themes = () => {
  console.log('files', files);
  return (
    <ul
                    role="list"
                    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                  >
                    {files.map((file, i) => (
                      <li key={i+'-org'} className="relative">
                        <div
                          className={classNames(
                            file.current
                              ? 'ring-2 ring-offset-2 ring-indigo-500'
                              : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500',
                            'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
                          )}
                        >
                          <img
                            src={file.source}
                            alt=""
                            className={classNames(
                              file.current ? '' : 'group-hover:opacity-75',
                              'object-cover pointer-events-none'
                            )}
                          />
                          <button type="button" className="absolute inset-0 focus:outline-none">
                            <span className="sr-only">View details for {file.name}</span>
                          </button>
                        </div>
                        <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                          {file.name}
                        </p>
                        <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.size}</p>
                      </li>
                    ))}
                  </ul>
  )
}




export default function Home() {
  return (
    <Dashboard>
      <Stats />

      <div className=" mt-20 mb-5 border-b border-gray-50">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Certified Orgs.</h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          Organizations listed here have gone through a rigurous vetting process to certify that these entities operate with
          the best interest of the Haitian pupulation.
        </p>
      </div>


      {/* <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Projects</h2> */}
      <ul role="list" className="mt-1 mb-6 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <li key={project.name} className="col-span-1 flex shadow-sm rounded-md">
            <div
              className={classNames(
                project.bgColor,
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}
            >
              {project.initials}
            </div>
            <div className="flex-1 flex items-center h-100 w-100 justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a href={project.href} className="text-gray-900 font-medium hover:text-gray-600">
                  {project.name}
                </a>
                <p className="text-gray-500">{project.members} Orgs.</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Open options</span>
                  <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Themes />
      <Orgs />
      <p>hello</p>
    </Dashboard>
  )
}

Home.getLayout = (page) => <Dashboard children={page}/>
