type HeaderProps = {
  openContact: () => void;
  openAuth: () => void;
  modalOpen: boolean; // ✅ added
};

function Header({ openContact, openAuth, modalOpen }: HeaderProps) {
  return (
    <header
      style={{
        pointerEvents: modalOpen ? "none" : "auto", // 🔥 disables clicks
        opacity: modalOpen ? 0.6 : 1,
        transition: "0.3s"

      }}
    >
      <h1>
        <span className="raw-red">RAW</span>LINE
      </h1>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#categories">Categories</a>
        <a href="#" onClick={openContact}>Contact</a>
        <a href="#" onClick={openAuth}>Log-In</a>
      </nav>
    </header>
  );
}

export default Header;