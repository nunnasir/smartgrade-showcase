import Grade from "./Grade";
import Search from "./Search";

export default function StudentGrade() {
  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h2>
          <Search />
        </div>
        <Grade />
      </div>
    </section>
  );
}
