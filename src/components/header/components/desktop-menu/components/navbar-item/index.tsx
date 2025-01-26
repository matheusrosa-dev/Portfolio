type Props = {
  text: string;
  onClick: () => void;
};

export function NavbarItem({ text, onClick }: Props) {
  return (
    <li className="text-[#c2c2c2] text-sm hover:text-white duration-100">
      <button type="button" onClick={onClick}>
        {text}
      </button>
    </li>
  );
}
