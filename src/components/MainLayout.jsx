import Navbar from "./Navbar";
import BookingButton from "./BookingButton";

const MainLayout = ({ children }) => {
  return (
    <div className="relative w-full h-fit flex flex-col justify-start items-center">
      <Navbar />
      <div className="fixed bottom-0 left-0 w-full block lg:hidden z-10">
        <BookingButton />
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
