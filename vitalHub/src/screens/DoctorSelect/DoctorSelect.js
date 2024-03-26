import { useEffect, useState } from "react"
import { Button } from "../../components/Button/Style"
import { ContainerUser } from "../../components/Container/Style"
import { ListComponent } from "../../components/List/List"

import { ButtonTitle, Title } from "../../components/Title/Style"
import { CancelLink } from "../ClinicSelect/Style"
import { DoctorCard } from "./Style"
import api from "../../services/Service"

// const Medicos = [
//    {id: 1, nome: "Usmar", especialidade: "Cardiologista"},
//    {id: 2, nome: "Usmar", especialidade: "Cardiologista"},
//    {id: 3, nome: "Usmar", especialidade: "Cardiologista"},
//    {id: 4, nome: "Usmar", especialidade: "Cardiologista"},
//    {id: 5, nome: "Usmar", especialidade: "Cardiologista"},
//    {id: 6, nome: "Usmar", especialidade: "Cardiologista"},
// ]


export const DoctorSelect = ({ navigation }) => {

   const [medico, setMedico] = useState();

   async function GetDoctor() {
      await api.get('/Medicos')
   }

   useEffect(() => {
      GetDoctor();
   }, [])
   
    return(
        <ContainerUser contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
             <Title style={{ marginTop: 30, marginBottom: 50 }}>Selecionar médico</Title>

             <ListComponent
               data={setMedico}
               keyExtractor={(item) => item.id}
               renderItem={() => (
               <DoctorCard/>
               )}
               showsVerticalScrollIndicator={false}
             />
              
            <Button 
               onPress={() => navigation.replace("DateSelect")}
               style={{ marginTop: 40 }}>
               <ButtonTitle>Continuar</ButtonTitle>
            </Button>

          <CancelLink style={{ marginBottom: 0 }} onPress={() => navigation.replace("ClinicSelect")}>Cancelar</CancelLink>
        </ContainerUser>
    )  
}