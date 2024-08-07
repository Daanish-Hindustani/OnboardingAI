import Navbar from "@/app/gobalComponents/navbar/Navbar";
import NameComponent from "../../adminComponents/NameComponent";
import SearchBar from "../../adminComponents/searchbar/SearchBar";

export default function admin() {
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
      </main>
    );
  } 