import { postAccessToken } from '@apis/axios';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

const findHref = (ref: React.RefObject<HTMLAnchorElement>) => {
    const url = new URL(window.location.href);
    const urlParams = url.searchParams;
    console.log('findHref', urlParams);
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
    // const navigate = useNavigate();
    const { mutate } = useMutation({ onSuccess: () => console.log('success'), mutationFn: postAccessToken });

    const hasCode = useCallback(() => {
        const url = new URL(window.location.href);
        const urlParams = url.searchParams;
        console.log('hasCode', urlParams);
        const code = urlParams.get('code');
        if (code) {
            // navigate('/board', { replace: true });
            mutate({ code });
        }
    }, [mutate]);

    useEffect(() => {
        findHref(ATagRef);
        hasCode();
    }, [hasCode]);

    return (
        <p id='app'>
            앱실행 완료 /{' '}
            <a ref={ATagRef} href='#' id='token-url'>
                API 자격증명 얻기
            </a>
        </p>
    );
}
