import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
    const handleClick = () => {
        console.log('Hello World!');
    };
    return (
        <div>
            <div>
                <Button className = "mb-5" secondary outline rounded onClick={handleClick}>
                    <GoBell />
                    Click here!
                </Button>
            </div>
            <div>
                <Button secondary>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button success>
                    <GoDatabase />
                    Seal Deal!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    Hide ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    <GoDatabase />
                    Comething!
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;