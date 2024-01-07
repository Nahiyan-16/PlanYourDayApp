import FormattedDate from "../Utils/FormattedDate";

function SideHeader() {
  return (
    <div
      className="bg-[url('./Images/2.jpg')] bg-cover bg-center w-[70%] flex flex-col justify-center align-center 
        sm:w-[50%] xs:w-[100%]"
    >
      <header className="text-aliceblue text-shadow-md">
        <h1 className="mb-5 text-[3rem] xs:text-[2rem] xs:p-[2rem]">
          Plan Your Day!
        </h1>
        <FormattedDate />
      </header>
    </div>
  );
}

export default SideHeader;
