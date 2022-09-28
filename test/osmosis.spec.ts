/// <reference types="@as-pect/assembly/types/as-pect" />

import { encodeMsgSwapExactAmountOut, decodeMsgSwapExactAmountOut } from '../src/osmosis/gamm/v1beta1/tx';
import { MsgSwapExactAmountOut, SwapAmountOutRoute } from '../src/osmosis/gamm/v1beta1/tx';
import { Coin } from '../src/cosmos/base/v1beta1/coin';

describe('Osmosis', () => {
  test('decodes a swap message', () => {
    const msg = new MsgSwapExactAmountOut(
      'osmo1hjct6q7npsspsg3dgvzk3sdf89spmlpfqua7lv',
      [new SwapAmountOutRoute(3, 'osmo')],
      '1000',
      new Coin('osmo', '100')
    );

    const encodedMsg = encodeMsgSwapExactAmountOut(msg);
    const decodedMsg = decodeMsgSwapExactAmountOut(encodedMsg);

    expect(decodedMsg.sender).toBe('osmo1hjct6q7npsspsg3dgvzk3sdf89spmlpfqua7lv');

    const route = decodedMsg.routes[0] as SwapAmountOutRoute;

    expect(route.poolId).toBe(3);
    expect(route.tokenInDenom).toBe('osmo');

    expect(decodedMsg.tokenInMaxAmount).toBe('1000');

    const tokenOut = decodedMsg.tokenOut as Coin;

    expect(tokenOut.denom).toBe('osmo');
    expect(tokenOut.amount).toBe('100');
  });
});
