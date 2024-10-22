import axios from 'axios';
// import { makeGet, makePatch, makePost } from '@/lib/utils';
import { makePost } from '@/lib/utils';

export const accessTokenAxios = axios.create({
    baseURL: 'https://hjs1002.cafe24api.com/',
    headers: {
        Authorization: 'Basic TFdmVjVmQm0xRUoxdUtmUHdzT0o1QSA6IDNxNHJPMHVKT1J0aXY2UTdtNEoxYUQ=',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': 'https://hjs1002.cafe24api.com', // cors origin (서버의 cors 설정이 동일해야 응답)
        'Access-Control-Allow-Creadentials': true,
        // 'Access-Control-Allow-Origin': '*',
    },
    // withCredentials: true,
});

export const makePostAccessToken = makePost(accessTokenAxios);

export const postAccessToken = (body: { code: string }) =>
    makePostAccessToken(
        `api/v2/oauth/token`,
        {
            grant_type: 'authorization_code',
            code: body.code,
            redirect_uri: 'https://cafe24-hjs1002.vercel.app/redirect',
        },
        { withCredentials: true }
    );

// const makeGetTI = makeGet(client);
// const makePostTI = makePost(client);
// const makePatchTI = makePatch(client);

// /** 로그인 */
// export const postSignIn = (body: TPostSignIn) => makePostTI<TPostSignInResponse>(`sign-in`, body);

// /** menu list */
// export const getCategory = makeGetTI<TGetCategoryList>('category-list');
// export const patchCategory = (body: TPatchCategoryList) => makePatchTI<TPatchCategoryList, TGetCategoryList>('category-list/patch', body);
