import { REQUEST, SUCCESS, FAILURE } from '../constants';

// eslint-disable-next-line unused-imports/no-unused-vars
export default (store: any) =>
  (next: any) =>
  async (action: { type: string; CallAPI: any }) => {
    if (!action.CallAPI) return next(action);

    const { type, CallAPI, ...rest } = action;

    next({ ...rest, type: type + REQUEST });

    try {
      const data = await CallAPI();

      next({ ...rest, type: type + SUCCESS, data });

      return data;
    } catch (error) {
      throw next({ ...rest, type: type + FAILURE, error });
    }
  };
