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
                        <DoctorContentImage source={{ uri: "https://imgb.ifunny.co/images/bfc9bc11c482d1bc9f53bb14458fd0f848c34aed77d84390a234c890d70e7c7f_1.jpg" }} />

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