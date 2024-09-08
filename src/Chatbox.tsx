import React, { FC } from 'react';

type ChatboxProps = {
    walletState: string | null;
};

const Chatbox: FC<ChatboxProps> = ({ walletState }) => {
    return (
        <div>
            {walletState ? `Wallet Address: ${walletState}` : 'No wallet connected'}
        </div>
    );
};

export { Chatbox };
