import { InlineNotification, Modal, ModalHeader, ModalBody } from "@carbon/react";



export default function Notification() {
    return(
        <div>
            <Modal danger>
                <ModalHeader />
                <InlineNotification
                    aria-label="closes notification"
                    kind="error"
                    onClose={function noRefCheck(){}}
                    onCloseButtonClick={function noRefCheck(){}}
                    statusIconDescription="notification"
                    subtitle="Status Down"
                    title="Live Chat: "
                />
            </Modal>
            
            
            
        </div>
    )
}