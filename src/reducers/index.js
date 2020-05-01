import { combainReducers } from 'redux';
import count from './count';

export default combainReducers({ count });
// export default combainReducers({ foo, bar, baz });
