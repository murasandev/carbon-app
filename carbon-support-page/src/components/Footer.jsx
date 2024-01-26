import { Button } from "@carbon/react";
import "./Footer.css"

export default function Footer() {
    return(
        <div className="footer-holder">
            {/* careers, about us, contact us, privacy policy,
            offices, social media links */}
            <div className="footer-links-holder">
                <Button kind="danger--ghost">Careers</Button>
                <Button kind="danger--ghost">About Us</Button>
                <Button kind="danger--ghost">Privacy Policy</Button>
                <Button kind="danger--ghost">Contact Us</Button>
            </div>
            <div className="footer-info-holder">
                <div className="footer-offices-holder">
                    <h4 className="footer-office-title">Offices</h4>
                    <div className="footer-office-locations">
                        <div className="footer-office-hnl">
                            <h4>Honolulu</h4>
                            <h6>123 Hnl St</h6>
                            <h7>12345 Honolulu, Hi</h7>
                        </div>
                        <div className="footer-office-london">
                            <h4>London</h4>
                            <h6>123 Lnd St</h6>
                            <h7>12345 London, Hi</h7>
                        </div>
                    </div>
                </div>
                <div className="footer-social-links">

                </div>
            </div>
        </div>
    )
}