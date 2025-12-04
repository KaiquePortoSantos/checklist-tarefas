import React, { useEffect, useRef } from "react"; // foi necessário importar o React para usar o fragment(<></> ou <React.Fragment></React.Fragment>) o <> </> sozinho funcionou sem importar o React.

import "./Dialog.style.css";

export function Dialog({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    console.log("Deveriamos mostrar o modal?", isOpen);
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  // "Show the dialog" button opens the dialog modally

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  // "Close" button closes the dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <React.Fragment>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={onClose}>
          {" "}
          Close{" "}
        </button>
        <p>dsadasdsadas</p>
      </dialog>
    </React.Fragment>
  );
}
