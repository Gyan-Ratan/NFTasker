import React, { useCallback, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alankey = '9a7748dbac42e98f278663cdc6fbf63f2e956eca572e1d8b807a3e2338fdd0dc/stage'

const Alanait = () => {
    useEffect(() => {
        alanBtn({
            key: alankey,
            onCommand: (command) => {
            if (command === 'testCommand') {
                alert('This code was executed');
                }
            }
        });
    }, []);

return (
    <div>

    </div>
);

}

export default Alanait;
