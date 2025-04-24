<<<<<<< HEAD
const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} My World. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======


const Footer = () => {
  return (
    <footer className="bg-black py-8 text-white">
      <div className="container mx-auto">Copyright &copy; 2022. All rights reserved</div>
    </footer>
  )
}

export default Footer
>>>>>>> 7e3eb3ee3f3ee147be5e7ccac56531f820c645b5
