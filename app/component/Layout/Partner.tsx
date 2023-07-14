import indrajalaLogo from '~/assets/indrajalaLogo.png';

const PartnerSection = () => {
  return (
    <div className="mb-10">
      <div className="container mx-auto">
       
        <div className="flex items-center justify-center ">
          <a href={"https://indrajala.org.tw/"} target="_blank" rel="noreferrer">
          <img
            src={indrajalaLogo}
            alt="Partner 1"
            className="h-16 rounded-full border-2 border-gray-200 bg-gray-700 p-2 shadow-md"
            />
            </a>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;