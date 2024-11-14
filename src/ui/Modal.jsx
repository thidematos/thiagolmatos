import { useEffect } from "react";
import { useUI } from "../context/UIProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Modal() {
  const { isOpen, component, toggleModal } = useUI();

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 top-0 z-[998] h-screen w-screen bg-gray-900/60"
      onClick={() => toggleModal({ status: false, component: null })}
    >
      <div className="centerXY absolute z-[999] w-[80%] rounded-lg border border-gray-300 bg-slate-950 shadow-xl lg:w-[50%]">
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute right-3 top-3 cursor-pointer text-2xl text-gray-700 drop-shadow"
          onClick={() => toggleModal({ status: false, component: null })}
        />
        {component}
      </div>
    </div>
  );
}

export default Modal;
