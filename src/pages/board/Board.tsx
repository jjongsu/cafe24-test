import { useEffect, useRef } from 'react';

const findHref = (ref: React.RefObject<HTMLAnchorElement>) => {
    const url = new URL(window.location.href);
    const urlParams = url.searchParams;
    console.log('findHref');
    const mallId = urlParams.get('mall_id');
    if (mallId && ref.current) {
        const tokenUrl =
            'https://' +
            mallId +
            '.cafe24api.com/api/v2/oauth/authorize?' +
            'response_type=code&client_id=LWfV5fBm1EJ1uKfPwsOJ5A&state=S256' +
            '&redirect_uri=https://cafe24-hjs1002.vercel.app' +
            '&scope=mall.read_category,mall.write_product,mall.read_product,mall.write_personal,mall.read_personal,mall.write_community,mall.read_community,mall.write_customer,mall.read_customer,mall.write_notification,mall.read_notification';
        console.log('token url setting', tokenUrl);
        ref.current.href = tokenUrl;
    }
};
export default function Board() {
    const ATagRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        findHref(ATagRef);
    }, []);

    return (
        <p id='app'>
            앱실행 완료 /{' '}
            <a ref={ATagRef} href='#' id='token-url'>
                API 자격증명 얻기
            </a>
        </p>
    );
}
