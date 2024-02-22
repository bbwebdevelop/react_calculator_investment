import logo from '../assets/investment-calculator-logo.png'

export default function Header() {
    return (
        <header id='header'>
            <img src={logo} alt='money' />
            <h1>Investment calculator</h1>
            <h2>bbwebdevelop.pl</h2>
        </header>
    )
}