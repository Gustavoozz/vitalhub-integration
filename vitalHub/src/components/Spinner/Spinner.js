import React from 'react';
import { BackgroundSpinner, SpinnerIcon } from './Style';
import { ActivityIndicator, Modal } from 'react-native';

const Spinner = ({
    visible,
    ...rest
}) => {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <BackgroundSpinner>
                <ActivityIndicator
                    size={"large"}
                    color={"#49B3BA"}
                />
            </BackgroundSpinner>
        </Modal>
    );
}

export default Spinner;