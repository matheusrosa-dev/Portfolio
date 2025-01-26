type Props = {
  onClick: () => void;
};

export function Contact({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-8 rounded-full px-6 bg-[rgba(0,0,0,0.4)] border text-sm border-[#324654] select-none hover:bg-white hover:text-black duration-300"
    >
      Contato
    </button>
  );
}
