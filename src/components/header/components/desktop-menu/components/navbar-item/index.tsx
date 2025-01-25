type Props = {
  text: string;
};

export function NavbarItem({ text }: Props) {
  return (
    <li className="text-[#c2c2c2] text-sm hover:text-white duration-100">
      <button type="button">{text}</button>
    </li>
  );
}
