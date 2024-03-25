import React from 'react';
import { BackgroundSpinner, SpinnerIcon } from './Style';
import { Modal } from 'react-native';

function Spinner({
    visible,
    ...rest
}) {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <BackgroundSpinner>
                <SpinnerIcon
                    source={{ uri: "https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-28.jpg" }}
                />
            </BackgroundSpinner>
        </Modal>
    );
}

export default Spinner;