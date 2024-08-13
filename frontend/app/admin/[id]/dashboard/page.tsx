import Navbar from "@/app/gobalComponents/navbar/Navbar";
import NameComponent from "../../adminComponents/NameComponent";
import SearchBar from "../../adminComponents/searchbar/SearchBar";

export default function admin() {
  // Sample list of files
  const files = [
    "file1.txt",
    "image2.png",
    "document3.pdf",
    "presentation4.pptx",
  ];
  // Sample list of folders
  const folders = [
    "Project Alpha",
    "Budget Reports",
    "Client Presentations",
    "Design Mockups",
  ];
    return (
      <main className="">
        <Navbar />
        <section className="flex w-screen justify-between items-center">
          <div className=" justify-start">
            <NameComponent />
            
          </div>
          <div className="flex justify-center w-full">
            <SearchBar />
          </div>
        </section>

        <div className="recentlyEdited text-2xl font-bold flex flex-wrap mx-auto py-4 px-6 2xl:px-0">
          Recently Edited
          <div className="folders-container flex space-x-4 mt-4 w-full">
            {folders.map((folder, index) => (
              <div
                key={index}
                className="folder bg-gray-200 rounded-md h-24 w-48 flex items-center justify-center shadow-sm"
              >
                <span className="text-gray-800">{folder}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="uploadFile text-2xl font-bold flex flex-wrap mx-auto py-4 px-6 2xl:px-0 mt-6">
          Upload Files
          <div className="placeholder-box bg-gray-200 rounded-md h-32 w-full flex items-center justify-center mt-4">
            <span className="text-gray-500">Drag & Drop files here or click to upload</span>
          </div>
        </div>

        <div className="yourFiles text-2xl font-bold flex flex-wrap mx-auto py-4 px-6 2xl:px-0 mt-6">
          Your Files
          <ul className="file-list w-full mt-4 bg-gray-100 rounded-md p-4">
            {["file1.txt", "image2.png", "document3.pdf", "presentation4.pptx"].map((file, index) => (
              <li key={index} className="file-item bg-white rounded-md p-2 mb-2 shadow-sm flex items-center justify-between">
                <span className="text-gray-800">{file}</span>
                <button className="text-blue-500 hover:text-blue-700">View</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  } 