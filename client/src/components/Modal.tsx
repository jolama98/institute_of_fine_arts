type ModalProps = {
  id: string,
  slug: string,
  children: React.ReactNode

}

export default function Modal({ id, slug, children }: ModalProps) {

  return (

    <div className="modal" tabIndex={-1} id={id}>
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{slug}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )

}