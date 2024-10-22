import { postAccessToken } from '@apis/axios';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useEffect } from 'react';

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

    useEffect(() => {
        hasCode();
    }, [hasCode]);

    return <div>Redirect</div>;
}
