export default function Feature({ text }) {
  return (
    <li className="flex items-center gap-2 text-sm text-[#000000]">
      <span>✓</span> {text}
    </li>
  );
}