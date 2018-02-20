import React from 'react';


class DetailsModal extends React.Component {

    close = (e) => {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        if (this.props.isOpen === false)
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
                <div className={this.props.className} style={modalStyle}>
                    {this.props.children}
                </div>
                {!this.props.noBackdrop && <div className="main__content--modal" style={backdropStyle} onClick={e => this.close(e)}/>}
            </div>
        )
    }
}

export default DetailsModal;
