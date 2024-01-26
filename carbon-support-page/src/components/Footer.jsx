import { Button, IconButton } from "@carbon/react";
import "./Footer.css"
import { LogoFacebook, LogoGithub, LogoInstagram, LogoLinkedin } from '@carbon/react/icons'

export default function Footer() {
    return(
        <div className="footer-holder">
            <div className="footer-links-holder">
                <Button kind="danger--ghost">Careers</Button>
                <Button kind="danger--ghost">About Us</Button>
                <Button kind="danger--ghost">Privacy Policy</Button>
                <Button kind="danger--ghost">Contact Us</Button>
            </div>

            <div className="footer-social-links">
                <IconButton label="Facebook" kind="danger--ghost">
                    <LogoFacebook />
                </IconButton>
                <IconButton label="GitHub" kind="danger--ghost">
                    <LogoGithub />
                </IconButton>
                <IconButton label="Instagram" kind="danger--ghost">
                    <LogoInstagram />
                </IconButton>
                <IconButton label="LinkedIn" kind="danger--ghost">
                    <LogoLinkedin />
                </IconButton>
            </div>
        </div>
    )
}