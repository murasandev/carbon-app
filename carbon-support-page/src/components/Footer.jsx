import { Button } from "@carbon/react";

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
                <div className="footer-offices">

                </div>
                <div className="footer-social-links">

                </div>
            </div>
        </div>
    )
}