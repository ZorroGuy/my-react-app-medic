function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p> Copyrights© {currentYear} </p>
    </footer>
  );
}

export default Footer;
