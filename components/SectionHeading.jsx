const SectionHeading = ({ heading }) => {
  return (
    <h1 className="bg-gradient-to-r from-[#808080]/50 via-[#808080] to-[#808080]/50  bg-clip-text text-transparent font-Montserrat font-semibold drop-shadow-lg lg:text-[48px] text-[36px]">
      {heading}
    </h1>
  );
};

export default SectionHeading;
