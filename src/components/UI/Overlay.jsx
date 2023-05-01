const Overlay = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full bg-black/70">
      {children}
    </div>
  );
};
export default Overlay;
