import LogoImage from "../assets/lws-logo-en.svg";

function Logo() {
  return (
    <a href="/">
      <img className="h-[40px]" src={LogoImage} alt="Lws" />
    </a>
  );
}

function Menu() {
  return (
    <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">
      Get Admission
    </a>
  );
}

export default function Navigation() {
  return (
    <nav className="py-6">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Logo />
        <Menu />
      </div>
    </nav>
  );
}
