import React, {Fragment} from 'react';

export default function App() {
    {/*주석은 이런식으로 작성한다*/
    }
    const name = '나는 최고다';
    return (
        <Fragment>
            <div>
                Hello <b>react</b>
            </div>
            <h1>{name}리액트 안녕!</h1>
            <h2>잘 작동하니?</h2>
        </Fragment>
    );
}
