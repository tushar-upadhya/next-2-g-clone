const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-neutral-100">
      <p className="py-3 px-8 text-sm text-slate-600">India</p>

      <hr />

      <div className="flex py-3 px-8">
        <ul className="flex [&>*]:mr-6 text-sm text-slate-600">
          <li>About</li>

          <li>Advertising</li>

          <li>Business</li>

          <li>How Search works </li>
        </ul>

        <ul className="flex ml-auto [&>*]:ml-6 text-sm text-slate-600">
          <a
            href="https://github.com/tushar-upadhya/next-2-g-clone"
            className="hover:text-cyan-950 font-semibold"
            target="_blank"
          >
            <li>Github</li>
          </a>

          <a
            href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/"
            className="hover:text-cyan-950 font-semibold"
            target="_blank"
          >
            <li>Linkedin</li>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
