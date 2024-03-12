export const Modal = ({ data, onClose }) => {


  return (
    <div  className="bg-black/80 w-full h-full absolute flex flex-col items-center justify-center">
      <div className="bg-red-200 w-[70%] lg:w-[40%] text-justify py-5 flex flex-col items-center rounded-lg">
        <h2 className="text-3xl md:text-5xl px-8 pb-8 text-center text-purple-950">
          Welcome to our privacy team!
        </h2>
        <p className="px-5 md:text-lg">
          Hi, <strong>{data?.name}</strong>! Your email{" "}
          <strong>{data?.email}</strong> was subscribe successfully! Get ready
          to receive the latest updates and exclusive content in your inbox.
        </p>
        <button
          className="bg-lime-300 px-8 py-1 md:text-lg font-medium text-purple-950 rounded-lg mt-4"
          onClick={onClose} 
        >
          Close
        </button>
      </div>
    </div>
  );
};
