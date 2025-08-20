const arr = ["HTML", "CSS", "JS", "ReactJS"];
function ListCourse() {
  return (
    <>
      <h1>Danh sách Khóa học</h1>
      <ol>
        {arr.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </>
  );
}

export default ListCourse;
