import {  ButtonTextStyleAppointment, ButtonTypeStyle } from "./Style"

export const BtnAppointmentType = ({
    textButton,
    clickButton = false,
    onPress
}) => {
    return(
        <ButtonTypeStyle clickButton={clickButton} onPress={onPress}>
            <ButtonTextStyleAppointment clickButton={clickButton}>{textButton}</ButtonTextStyleAppointment>
        </ButtonTypeStyle>
    )
}