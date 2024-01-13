import { getImageUrl, getScores, getStudents } from "../utils";

function Student({ student, studentId }) {
  return (
    <tr className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{studentId + 1}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8 rounded-full"
            src={getImageUrl(student.id)}
            width="32"
            height="32"
            alt={student.name}
          />
          <span className="whitespace-nowrap">{student.name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">
        {getScores(student.marks)}
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{student.marks}%</td>
    </tr>
  );
}

export default function Grade() {
  const students = getStudents();

  return (
    <div className="max-w-[848px] mx-auto overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
              ID
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold text-left">
              Name
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              Class One
            </td>
          </tr>
          {students
            .filter((cls) => cls.class === 1)
            .sort((a, b) => b.marks - a.marks)
            .slice(0, 10)
            .map((std, index) => (
              <Student student={std} studentId={index} key={std.id} />
            ))}

          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              Class Two
            </td>
          </tr>
          {students
            .filter((cls) => cls.class === 2)
            .sort((a, b) => b.marks - a.marks)
            .slice(0, 10)
            .map((std, index) => (
              <Student student={std} studentId={index} key={std.id} />
            ))}

          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
              Class Three
            </td>
          </tr>
          {students
            .filter((cls) => cls.class === 3)
            .sort((a, b) => b.marks - a.marks)
            .slice(0, 10)
            .map((std, index) => (
              <Student student={std} studentId={index} key={std.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
