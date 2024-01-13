export default function Footer() {
  let copyrightYear = new Date().getUTCFullYear();
  let copyRightText = "All rights reserved by Learn with Sumit";

  return (
    <footer className="py-6 md:py-8">
      <div className="container mx-auto">
        <p className="text-center text-base text-gray-500">
          Copyright ©{copyrightYear} | {copyRightText}
        </p>
      </div>
    </footer>
  );
}
