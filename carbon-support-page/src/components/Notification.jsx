import { Button, InlineNotification, Modal } from "@carbon/react";

export default function Notification() {
    return(
        <div>
            
            <InlineNotification
                aria-label="closes notification"
                kind="error"
                onClose={function noRefCheck(){}}
                onCloseButtonClick={function noRefCheck(){}}
                statusIconDescription="notification"
                subtitle="Status Down"
                title="Live Chat: "
              />
            
            
            
        </div>
    )
}