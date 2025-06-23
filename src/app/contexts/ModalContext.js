// contexts/ModalContext.js
'use client';
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalState, setModalState] = useState({
        show: false,
        content: null,
    });

    const showModal = (content) => {
        setModalState({
            show: true,
            content: content || <CourseInquiryModal />, // Default to CourseInquiryModal if no content provided
        });
    };

    const hideModal = () => {
        setModalState({
            show: false,
            content: null,
        });
    };

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            {children}
            {modalState.show && (
                <>
                    {modalState.content}
                </>
            )}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};