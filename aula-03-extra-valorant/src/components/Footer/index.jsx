import './style.css';


const Footer = () => {
    const generateDateString = () => {
        const createionYear = '2021';
        const currentYear = new Date().getFullYear().toString();
        return createionYear === currentYear ? currentYear : `${createionYear} - ${currentYear}`;
    };

    return (
        <footer id="footer">
            <h3>Todos os difeitos reservados. &copy;Copyright {generateDateString()}</h3>
        </footer>
    );
};

export default Footer;