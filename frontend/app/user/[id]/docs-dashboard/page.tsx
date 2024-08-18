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

      <div className="instructions">
        <h1 className="font-bold text-2xl">User Docs</h1>
      </div>
      <div className="App Refrence">
        <h1 className="font-bold text-2xl">App Refrence</h1>
      </div>
    </main>
  );
}