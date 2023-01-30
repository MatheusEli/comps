import Accordion from './components/Accordion';

function App() {

    const items = [
        {
            id: 'dcdade',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id: '23r23f',
            label: 'Can I use Javascript on a project',
            content: 'You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id: '67uhih6',
            label: 'Can I use CSS on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want.'
        }
    ];
    return (
        <Accordion items={items}/>
    );
}

export default App;