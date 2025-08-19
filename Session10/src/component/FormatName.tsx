const user = {
  firstName: "Nguyen Van",
  lastName: "A",
};
function formatName(user: { firstName: string; lastName: string }) {
  return `${user.firstName} ${user.lastName}`.trim();
}
function FormatName() {
  return <h1>Ho va ten: {formatName(user)}</h1>;
}
export default FormatName;
