import './Modal.css'
import ReactDOM from 'react-dom'

export default function Modal({ children, isSalesModal }) {
  return ReactDOM.createPortal(
    <div className='modal-block'>
      <div className="modal-backdrop">
        <div className="modal" style={{
          border: "4px solid",
          borderColor: isSalesModal ? "#ff4500" : "#aaaaaa",
          textAlign: "center"
        }}>
          <p>{children}</p>
        </div>
      </div>
    </div>
    ,
    document.body
  )
}



