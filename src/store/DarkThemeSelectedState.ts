import React from 'react';
import { atom } from 'recoil';

interface IDarkState {
    default: boolean,
}

export const darkThemeSelectedState = atom({
    key: 'darkThemeSelectedState',
    default: true as IDarkState["default"],
});
