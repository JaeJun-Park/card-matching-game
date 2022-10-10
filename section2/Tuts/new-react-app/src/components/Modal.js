import './Modal.css'
import ReactDOM from 'react-dom'

export default function Modal({ children, handleClose }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
      <button onClick={handleClose}>close</button>
    </div>,
    document.body
  )
}
