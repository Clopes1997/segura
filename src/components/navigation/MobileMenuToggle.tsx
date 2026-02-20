interface MobileMenuToggleProps {
  onToggle: () => void;
}

export default function MobileMenuToggle({ onToggle }: MobileMenuToggleProps) {
  return (
    <button
      id="menu-toggle"
      className="block lg:hidden z-50"
      onClick={onToggle}
      aria-label="Toggle mobile menu"
    >
      <img
        src="/icons/hamburguer.svg"
        alt="hamburguer icon"
        className="hamburguer_icon z-40"
        width="22"
        height="19"
        loading="lazy"
        decoding="async"
      />
    </button>
  );
}
