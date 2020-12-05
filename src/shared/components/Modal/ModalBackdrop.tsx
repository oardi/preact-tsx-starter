import { h } from 'preact';
import { createPortal } from "preact/compat";

export const ModalBackdrop = () => createPortal(<div className="modal-backdrop fade show" />, document.body);
