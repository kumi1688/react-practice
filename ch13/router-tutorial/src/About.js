import React from 'react';
import qs from 'qs';

const About = ({location}) => {
    //문자열 맨 앞의 ? 생략
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const showDetail = query.detail === 'true';

    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 라우터 예제 프로젝트</p>
            {showDetail && <p>디테일 값을 따로 설정함</p>}
        </div>
    );
};

export default About;