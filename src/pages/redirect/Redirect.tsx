import { postAccessToken } from '@apis/axios';
import { Button } from '@components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';

export default function Redirect() {
    const { mutateAsync } = useMutation({ onSuccess: () => console.log('success'), mutationFn: postAccessToken });

    const hasCode = useCallback(() => {
        const url = new URL(window.location.href);
        const urlParams = url.searchParams;
        console.log('hasCode', urlParams);
        const code = urlParams.get('code');
        if (code) {
            // navigate('/board', { replace: true });
            mutateAsync({ code });
        }
    }, [mutateAsync]);

    // useEffect(() => {
    //     hasCode();
    // }, [hasCode]);

    return (
        <>
            <div>Redirect</div>
            <div>{new URL(window.location.href).searchParams.get('code')}</div>
            <Button onClick={hasCode}>access token 발급</Button>
        </>
    );
}
