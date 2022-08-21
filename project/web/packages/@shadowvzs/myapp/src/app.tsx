import React from 'react';
import { Header } from '@shadowvzs/header/Header';
import { Footer } from '@shadowvzs/footer/Footer';
import cn from "@shadowvzs/utility/classnames";
import config from "@shadowvzs/config/config.json";
import { UserDto } from '@shadowvzs/dto/UserDto';

function App() {
    React.useEffect(() => {
        fetch(config.API_URL).then(e => e.json()).then((userDto: UserDto) => {
            console.log('result:', userDto);
        });
    }, []);

    return (
        <div>
            <Header />
            <main className={cn('main', 'content')}>
                {'react setup from scratch without cra testing ts!!! with classname helper from @shadowvzs/utility'}
            </main>
            <Footer />
        </div>
    );
}

export default App;