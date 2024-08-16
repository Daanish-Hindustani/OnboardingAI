import Navbar from "@/app/gobalComponents/navbar/Navbar";
import NameComponent from "@/app/user/userComponents/NameComponent";
import SearchBar from "@/app/user/userComponents/searchbar/SearchBar";

export default function user() {
  // Sample file for testing
  const files = [
    { name: "File 1", size: "100KB", type: "PDF", date: "2024-05-01" },
    { name: "File 2", size: "200KB", type: "TXT", date: "2024-04-01" },
    { name: "File 3", size: "300KB", type: "MOV", date: "2024-02-01" },
  ];
  // Sample folder for testing
  const folders = [
    { name: "Folder 1", size: "100KB", type: "PDF" },
    { name: "Folder 2", size: "200KB", type: "PNG" },
    { name: "Folder 3", size: "300KB", type: "TXT" },
  ];

  return (
    <main className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
      <Navbar />
      <section className="flex w-screen justify-between items-center p-8">
        <div className="justify-start">
          <NameComponent />
        </div>
        <div className="flex justify-center w-full">
          <SearchBar />
        </div>
      </section>
      
      <div className="taskstodo text-2xl font-bold flex flex-wrap mx-auto py-6 px-8 2xl:px-0">
        <div className="w-full mb-4 flex justify-between items-center">
          <h2 className="text-3xl text-gray-900 font-extrabold">Tasks to do</h2>
          <a href="#" className="text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors duration-300">View all</a>
        </div>
        <div className="folders-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {folders.map((folder, index) => (
            <div
              key={index}
              className="folder bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg h-32 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <span className="text-white text-xl font-semibold mb-2">{folder.name}</span>
              <span className="text-gray-300 text-sm">{folder.size} • {folder.type}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="taskstodo-listview flex flex-col mx-auto py-8 px-8 2xl:px-0 mt-8 bg-white rounded-xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Tasks to Complete</h2>
        <ul className="folder-list w-full space-y-4">
          {folders.map((folder, index) => (
            <li 
              key={index}
              className="folder-item bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-4 shadow-md flex items-center justify-between hover:scale-102 transition-transform duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-gray-700 rounded-full p-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                </div>
                <span className="text-gray-800 font-semibold text-lg">{folder.name}</span>
              </div>
              <button 
                className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 hover:scale-105"
              >
                Begin Task
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="recentFiles bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 mb-8">Recent Files</h2>
        <div className="w-full">
          <nav className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-xl rounded-xl p-4 shadow-lg">
            <ul className="flex justify-between font-bold text-sm text-gray-800">
              <li className="w-1/3">Name</li>
              <li className="w-1/5 text-center">Size</li>
              <li className="w-1/5 text-center">Type</li>
              <li className="w-1/5 text-right">Date</li>
            </ul>
          </nav>
          <ul className="file-list w-full mt-6 space-y-4">
            {files.map((file, index) => (
              <li 
                key={index}
                className="file-item bg-white bg-opacity-50 rounded-xl p-5 shadow-lg flex items-center justify-between transition-all duration-300 hover:scale-102"
              >
                <div className="flex items-center w-1/3">
                  <svg className="w-6 h-6 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-gray-900 font-semibold">{file.name}</span>
                </div>
                <span className="text-gray-700 w-1/5 text-center">{file.size}</span>
                <span className="text-gray-700 w-1/5 text-center">{file.type}</span>
                <span className="text-gray-700 w-1/5 text-right">{file.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}