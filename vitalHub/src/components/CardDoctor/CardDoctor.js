import { useState } from "react";
import {
    DoctorContainer,
    DoctorContent,
    DoctorContentImage,
    DoctorText,
    DoctorTitle,
    DoctorTouchable,
    ExtraContainer,
    ExtraContent
} from "./Style"

export const CardDoctor = ({
    medico,
    setMedicoId
}) => {
    // CONSTS
    const [selected, setSelected] = useState(false);



    // FUNCTIONS    
    const HandlePress = () => {
        if (selected == false) {
            setSelected(true);

            setMedicoId(medico.idNavigation.id);
        }
        else {
            setSelected(false);

            setMedicoId(null);
        }
    }



    return (
        <ExtraContainer>
            <ExtraContent>
                <DoctorContainer selected={selected}>
                    <DoctorTouchable onPress={() => HandlePress()}>
                        <DoctorContentImage source={{ uri: medico.idNavigation.foto }} />

                        <DoctorContent>
                            <DoctorTitle>{medico.idNavigation.nome}</DoctorTitle>

                            <DoctorText>{medico.especialidade.especialidade1}</DoctorText>
                        </DoctorContent>
                    </DoctorTouchable>
                </DoctorContainer>
            </ExtraContent>
        </ExtraContainer >
    )
}