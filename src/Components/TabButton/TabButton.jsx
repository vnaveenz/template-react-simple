export function TabButton({ children, onClick, content }) {
  console.log(content);
  return (
    <li>
      <button onClick={() => onClick(content)}>{children}</button>
    </li>
  );
}
