import './Header.css'
import { Button } from '@carbon/react'
export default function Header() {
    return(

        <div className="header">
            <div className="header-logo">
                <Button kind="danger--ghost">
                    Logo
                </Button>
            </div>
            
            <div className="header-right">
                <Button kind="danger--ghost">
                    Home
                </Button>
                <Button kind="danger--ghost">
                    Services
                </Button>
                <Button kind="danger--ghost">
                    About Us
                </Button>
                <Button kind="danger--ghost">
                    Contact Us
                </Button>
            </div>
        </div>     
    )
}