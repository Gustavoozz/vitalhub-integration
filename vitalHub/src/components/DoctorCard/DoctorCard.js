import {
    DoctorContainer,
    DoctorContent,
    DoctorContentImage,
    DoctorText,
    DoctorTitle,
    DoctorTouchable
} from "./Style"

export const DoctorCard = ({
    onPress,
    medico,
    selected,
}) => {
    return (
        <DoctorContainer>
            <DoctorTouchable onPress={onPress}>
                <DoctorContentImage source={{ uri: "https://imgb.ifunny.co/images/bfc9bc11c482d1bc9f53bb14458fd0f848c34aed77d84390a234c890d70e7c7f_1.jpg" }} />

                <DoctorContent>
                    <DoctorTitle>{medico.idNavigation.nome}</DoctorTitle>

                    <DoctorText>{medico.especialidade.especialidade1}</DoctorText>
                </DoctorContent>
            </DoctorTouchable>
        </DoctorContainer>
    )
}