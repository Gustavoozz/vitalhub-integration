import { useEffect, useState } from "react"
import { Button } from "../../components/Button/Style"
import { ClinicCard } from "../../components/ClinicCard/ClinicCard"
import { Container } from "../../components/Container/Style"
import { ListComponent } from "../../components/List/List"
import { ButtonTitle, Title } from "../../components/Title/Style"
import { CancelLink } from "./Style"

// API importada
import api from "../../services/Service";

export const ClinicSelect = ({ navigation }) => {
  // CONSTS
  const [data, setData] = useState({});

  // FUNCTIONS
  const ListarClinicas = async () => {
    await api.get("/Clinica/ListarTodas")
      .then(response => {
        setData(response.data)
      }
      ).catch(error => {
        console.log(error)
      }
      )
  }


  // EFFECTS
  useEffect(() => {
    ListarClinicas();
  }, [])


  return (
    <Container>
      <Title>Selecionar clínica</Title>

      <ListComponent
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // card clínica
          <ClinicCard
            clinic={item}
          />
        )}
      />

      <Button
        onPress={() => navigation.replace("DoctorSelect")}>
        <ButtonTitle>Continuar</ButtonTitle>
      </Button>

      <CancelLink onPress={() => navigation.replace("Main")}>Cancelar</CancelLink>

    </Container>
  )
}