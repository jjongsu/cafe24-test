import axios from 'axios';
import { makeGet, makePatch, makePost } from './utils';

const client = axios.create({
    baseURL: 'https://hjs1002.cafe24api.com/',
});

// const makeGetTI = makeGet(client);
// const makePostTI = makePost(client);
// const makePatchTI = makePatch(client);

// /** 로그인 */
// export const postSignIn = (body: TPostSignIn) => makePostTI<TPostSignInResponse>(`sign-in`, body);

// /** menu list */
// export const getCategory = makeGetTI<TGetCategoryList>('category-list');
// export const patchCategory = (body: TPatchCategoryList) => makePatchTI<TPatchCategoryList, TGetCategoryList>('category-list/patch', body);
