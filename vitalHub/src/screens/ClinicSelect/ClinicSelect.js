import { useEffect, useState } from "react"
import { Button, ButtonUnusable } from "../../components/Button/Style"
import { ClinicCard } from "../../components/ClinicCard/ClinicCard"
import { Container } from "../../components/Container/Style"
import { ListComponent } from "../../components/List/List"
import { ButtonTitle, Title } from "../../components/Title/Style"
import { CancelLink } from "./Style"

// API importada
import api from "../../services/Service";

export const ClinicSelect = ({
  navigation,
  route,
}) => {
  // CONSTS
  const [clinica, setClinica] = useState([]); // informações da clínica

  const prioridadeId = route.params.prioridadeId; // id da prioridade
  const pacienteId = route.params.pacienteId; // id do usuário
  const prioridade = route.params.prioridade; // nome da prioridade
  const cidade = route.params.cidade;
  const [clinicaId, setClinicaId] = useState(null); // id da clínica



  // FUNCTIONS
  const ListarClinicas = async () => {
    await api.get(`/Clinica/BuscarPorCidade?cidade=${cidade}`)
      .then(response => {
        setClinica(response.data)
      }).catch(error => {
        console.log(error)
      })
  }

  const HandleSelectClinic = (rota) => {
    if (clinica != null) {
      navigation.replace(rota, {
        prioridadeId: prioridadeId,
        pacienteId: pacienteId,
        clinicaId: clinicaId,

        prioridade: prioridade,
        cidade: cidade
      })
    }
  }


  // EFFECTS
  useEffect(() => {
    ListarClinicas();
  }, [])



  return (
    <Container>
      <Title>Selecionar clínica</Title>

      <ListComponent
        data={clinica}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // card clínica
          <ClinicCard
            clinica={item}
            setClinicaId={setClinicaId}
          />
        )}
      />

      {
        clinicaId != null ?

          <Button
            onPress={() => HandleSelectClinic("DoctorSelect")}>
            <ButtonTitle>Continuar</ButtonTitle>
          </Button>
          :
          <ButtonUnusable>
            <ButtonTitle>Continuar</ButtonTitle>
          </ButtonUnusable>
      }


      <CancelLink onPress={() => navigation.replace("Main")}>Cancelar</CancelLink>

    </Container>
  )
}