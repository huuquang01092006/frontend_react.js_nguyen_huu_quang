type Person = { name: string; age: number };
type Employee = { employeeId: string; department: string };
type StaffMember = Person & Employee;
function printStaffInfo(staff: StaffMember) {
  console.log(
    `Nhan vien: ${staff.name} (${staff.age} tuoi), Ma nhan vien: ${staff.employeeId} - Phong: ${staff.department}`
  );
}
printStaffInfo({
  name: "Khanh",
  age: 20,
  employeeId: "EMP001",
  department: "IT",
});