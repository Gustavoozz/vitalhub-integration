import { ClinicCards, LocationClinic, Rating,
    NameClinic, TimeText, TimeView,
    ViewColumn, ViewRow  } from './Style'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCalendar } from '@fortawesome/free-regular-svg-icons'


const ClinicCard = ({ clinica }) => {
return (
<ClinicCards>
<ViewColumn>
  <NameClinic>{clinica.nomeFantasia}</NameClinic>

  <LocationClinic>{clinica.endereco.logradouro}</LocationClinic>
</ViewColumn>

<ViewColumn alignItems='flex-end'>

  <TimeView>
    {/* <FontAwesomeIcon icon={faCalendar} size={14} color='#49B3BA'/> */}

    <TimeText>19:00</TimeText>
  </TimeView>

</ViewColumn>
</ClinicCards>
);
};

export default ClinicCard;