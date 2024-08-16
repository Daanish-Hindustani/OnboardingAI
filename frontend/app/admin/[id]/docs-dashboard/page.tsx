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
          <div><h1 className="font-bold text-2xl">Admin Docs</h1></div>
        </section>
    </main>
  );
}