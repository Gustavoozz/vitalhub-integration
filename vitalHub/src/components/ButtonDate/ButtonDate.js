import { ButtonTitle } from "../Title/Style"
import { DateConfirm } from "./Style"

export const ButtonDate = ({ onPressScheduling }) => {
    return(
        <DateConfirm onPress={onPressScheduling}>
            <ButtonTitle>Confirmar</ButtonTitle>
        </DateConfirm>
    )
}