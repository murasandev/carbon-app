import './Header.css'
import { Button, Search } from '@carbon/react'
import viteLogo from '/vite.svg'

export default function Header() {
    return(

        <div className="header">
            <div className="header-logo">
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
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
                <Search
                    closeButtonLabelText="Clear search input"
                    defaultValue=""
                    id="search-playground-1"
                    labelText="Label text"
                    placeholder="Search"
                    playgroundwidth={300}
                    role="searchbox"
                    size="md"
                    type="text"
                />
            </div>
        </div>     
    )
}