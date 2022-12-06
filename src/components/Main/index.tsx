import Navbar from "../Navbar/index";
import LeftSection from "../LeftSection/index";
import { useState } from "react";

export default function Main() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div
      className="w-screen h-screen flex"
      style={isDark ? { background: "#111" } : { background: "#fff" }}
    >
      <Navbar setIsDark={setIsDark} isDark={isDark} />
      <LeftSection isDark={isDark} />
    </div>
  );
}
