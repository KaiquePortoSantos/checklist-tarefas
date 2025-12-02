import React from "react"; // foi necessário importar o React para usar o fragment(<></> ou <React.Fragment></React.Fragment>) o <> </> sozinho funcionou sem importar o React.

import "./Dialog.style.css"

export function Dialog() {
  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector("dialog + button");
  const closeButton = document.querySelector("dialog button");

  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  return (
    <React.Fragment>
      <dialog>
        <button autoFocus> Close </button>
        <p>dsadasdsadas</p>
      </dialog>
      <button>sssdasda</button>
    </React.Fragment>
  );
}
