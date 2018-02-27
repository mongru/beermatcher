import React from 'react';


const DetailsModal = ({
    history,
    onClose,
    isOpen,
    className,
    children,
    noBackdrop,
    beerList
}) => {


    const close = (e) => {
        e.preventDefault();
        if (onClose) {
            onClose();
        }
        // e.stopPropagation();
        // history.goBack();
    }

    if (isOpen === false)
        return null

    let modalStyle = {
        position: 'fixed',
        top: '50vh',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        background: '#fff',
        width: '80%'
    }

    let backdropStyle = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: 'rgba(0, 0, 0, 0.3)'
    }

    return (
        <div className="main__content--modal">
            <div className={className} style={modalStyle}>
                {children}
            </div>
            {!noBackdrop && <div className="main__content--modal" style={backdropStyle} onClick={e => close(e)}/>}
        </div>
    )

}

export default DetailsModal;
