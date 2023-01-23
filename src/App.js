import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
    const handleClick = () => {
        console.log('Hello World!');
    };
    return (
        <div>
            <div>
                <Button primary onClick={handleClick}>
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

export default App;